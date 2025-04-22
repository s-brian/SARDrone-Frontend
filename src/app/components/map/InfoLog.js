"use client";
import InstanceCard from "./InstanceCard";
import { useEffect, useRef } from "react";
import { droneInstances } from "./sampleDroneData";

export default function InfoLog({ droneId, droneLogs, setDroneLogs }) {
  const socketRef = useRef(null);

  useEffect(() => {
    // Use the provided droneId from props, or fallback to a default if not available
    const droneIdToUse = droneId || 1;
    console.log("Using drone ID for WebSocket connection:", droneIdToUse);
    const wsurl = `wss://api.meritdrone.site/drone/ws/${droneIdToUse}`;
    socketRef.current = new WebSocket(wsurl);

    socketRef.current.onopen = () => {
      console.log("WebSocket connected to drone");
    };

    socketRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("Drone data: ", data);
      } catch (err) {
        console.log("Invalid JSON from websocket: ", event.data);
      }
    };
    setDroneLogs(droneSightings);

    return () => {
      socketRef.current?.close();
    };
  }, [droneId]);

  // Using the imported sample data from sampleDroneData.js
  const droneSightings = droneInstances.filter(
    (inst) => inst.status === "detected"
  );

  return (
    <div className="h-full flex flex-col">
      {/* Control Panel */}
      <div className="p-4 bg-white border-b border-gray-300">
        <h2 className="text-lg font-semibold mb-2">Drone Control</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            Center Map
          </button>
          <button className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm">
            Follow Drone
          </button>
        </div>
      </div>

      {/* Drone Detection List */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-4 p-4">
          {droneInstances.map((instance) => (
            <InstanceCard key={instance.timestamp} instance={instance} />
          ))}
        </div>
      </div>
    </div>
  );
}
