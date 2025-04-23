"use client";
import InstanceCard from "./InstanceCard";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { droneInstances } from "./sampleDroneData";

export default function InfoLog({ droneId, droneLogs, setDroneLogs }) {
  const router = useRouter();
  const socketRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("all");
  const [hasWriteAccess, setHasWriteAccess] = useState(false);

  // Check if user has write access to this drone
  useEffect(() => {
    const checkDroneAccess = async () => {
      if (!droneId) return;

      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("No authentication token found");
          return;
        }

        const response = await fetch(
          "https://api.meritdrone.site/login/drones",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem("authToken");
          window.dispatchEvent(new Event("storage"));
          router.push("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch drone access");
        }

        const data = await response.json();
        // Check if this drone is in write_drones list
        setHasWriteAccess(data.write_drones.includes(droneId));
      } catch (error) {
        console.error("Error checking drone access:", error);
      }
    };

    checkDroneAccess();
  }, [droneId, router]);

  // Fetch initial drone logs from API
  useEffect(() => {
    const fetchInitialDroneLogs = async () => {
      if (!droneId) return;

      setIsLoading(true);

      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("No authentication token found");
          return;
        }

        const response = await fetch(
          `https://api.meritdrone.site/drone/${droneId}/info`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem("authToken");
          window.dispatchEvent(new Event("storage"));
          router.push("/login");
          return;
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch drone logs: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched initial drone logs:", data);
        setDroneLogs(data);
      } catch (error) {
        console.error("Error fetching drone logs:", error);
        setDroneLogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialDroneLogs();
  }, [droneId]);

  // WebSocket connection for real-time updates
  useEffect(() => {
    if (!droneId) return;

    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No authentication token found for WebSocket connection");
      return;
    }

    console.log("Using drone ID for WebSocket connection:", droneId);
    const wsurl = `wss://api.meritdrone.site/drone/${droneId}/ws?token=${encodeURIComponent(
      token
    )}`;
    socketRef.current = new WebSocket(wsurl);

    socketRef.current.onopen = () => {
      console.log("WebSocket connected to drone");
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket connection error:", error);
    };

    socketRef.current.onclose = (event) => {
      console.log(`WebSocket closed with code ${event.code}`);
      if (event.code === 4401) {
        console.error("Authentication failed for WebSocket connection");
        localStorage.removeItem("authToken");
        window.dispatchEvent(new Event("storage"));
      } else if (event.code === 4403) {
        console.error("No permission to access this drone");
      }
    };

    socketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("Drone data: ", data);
        setDroneLogs((prevLogs) => [data, ...prevLogs]);
      } catch (err) {
        console.log("Invalid JSON from websocket: ", event.data);
      }
    };

    return () => {
      socketRef.current?.close();
    };
  }, [droneId]);

  const sortedDroneLogs = droneLogs ? [...droneLogs].sort((a, b) => {
    if (sortBy === "detected") {
      return (b.score > 50 ? 1 : 0) - (a.score > 50 ? 1 : 0);
    } else if (sortBy === "undetected") {
      return (a.score > 50 ? 1 : 0) - (b.score > 50 ? 1 : 0);
    }
    return 0;
  }) : [];

  function startDrone() {
    socketRef.current.send("takeoff");
    console.log("Starting Drone")
    alert("Starting Drone");
  }

  return (
    <div className="h-full flex flex-col">
      {/* Control Panel */}
      <div className="p-4 bg-white border-b border-gray-300">
        <h2 className="text-lg font-semibold mb-2">Drone Control</h2>
        <div className="flex space-x-2">
          {hasWriteAccess && (
            <button 
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm" 
              onClick={() => startDrone()}
            >
              Start Drone
            </button>
          )}
        </div>
      </div>

      {/* Drone Detection List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="flex gap-2 mb-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Logs</option>
              <option value="detected">Detected First</option>
              <option value="undetected">Undetected First</option>
            </select>
            <button
              onClick={() => setDroneLogs([])}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex-shrink-0"
            >
              Clear
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-8 h-8 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin mb-2"></div>
                <p className="text-gray-600">Loading drone logs...</p>
              </div>
            ) : droneLogs && droneLogs.length > 0 ? (
              sortedDroneLogs.map((instance) => (
                <InstanceCard key={instance.timestamp} selectedLog={instance} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No drone logs available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
