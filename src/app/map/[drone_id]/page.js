"use client";
import InstanceHolder from "../../components/InstanceHolder";
import DroneMap from "../../components/DroneMap";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Map() {
  const params = useParams();
  const [droneId, setDroneId] = useState(null);
  const [droneSightings, setDroneSightings] = useState([]);
  
  useEffect(() => {
    // Extract the drone_id from the URL parameters
    if (params && params.drone_id) {
      setDroneId(params.drone_id);
    }
  }, [params]);

  return (
    <div className="h-[calc(100vh-73px)] overflow-hidden"> {/* Subtract navbar height (py-4 = 32px + border 1px) */}
      <div className="flex flex-row w-full h-full">
        <div className="w-[80%] h-full relative">
          <DroneMap droneSightings={droneSightings} droneId={droneId} />
        </div>

        <div className="w-[20%] h-full flex flex-col bg-gray-100 border-l border-gray-300">
          {/* Control Panel (15% height) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[15%] p-4 bg-white border-b border-gray-300"
          >
            <h2 className="text-lg font-semibold mb-2">Drone Control</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Center Map
              </button>
              <button className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm">
                Follow Drone
              </button>
            </div>
          </motion.div>

          {/* Drone Detection List (85% height) */}
          <div className="h-[85%] overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <InstanceHolder
                droneId={droneId}
                onSetDroneSightings={setDroneSightings}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
