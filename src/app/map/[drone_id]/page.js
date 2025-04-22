"use client";
import InfoLog from "../../components/map/InfoLog";
import DroneMap from "../../components/map/DroneMap";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Map() {
  const params = useParams();
  const [droneId, setDroneId] = useState(null);
  const [droneLogs, setDroneLogs] = useState([]);

  const [selectedLog, setSelectedLog] = useState(null);

  useEffect(() => {
    // Extract the drone_id from the URL parameters
    if (params && params.drone_id) {
      setDroneId(params.drone_id);
    }
  }, [params]);

  return (
    <div className="h-[calc(100vh-73px)] overflow-hidden">
      {" "}
      {/* Subtract navbar height (py-4 = 32px + border 1px) */}
      <div className="flex flex-row w-full h-full">
        <div className="w-[80%] h-full relative">
          <DroneMap
            droneLogs={droneLogs}
            droneId={droneId}
            selectedLog={selectedLog}
            setSelectedLog={setSelectedLog}
          />
        </div>

        <div className="w-[20%] h-full flex flex-col bg-gray-100 border-l border-gray-300">
          <InfoLog
            droneId={droneId}
            droneLogs={droneLogs}
            setDroneLogs={setDroneLogs}
            selectedLog={selectedLog}
            setSelectedLog={setSelectedLog}
          />
        </div>
      </div>
    </div>
  );
}
