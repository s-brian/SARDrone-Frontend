"use client";
import InstanceHolder from "../components/InstanceHolder";
import DroneMap from "../components/map/DroneMap";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Map() {
  const [droneSightings, setDroneSightings] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);

  return (
    <div className="h-screen overflow-hidden">
      <div
        id="map-container"
        className="flex flex-row relative w-full h-screen bg-white"
      >
        <DroneMap 
          droneLogs={droneSightings}
          droneId="1"
          selectedLog={selectedLog}
          setSelectedLog={setSelectedLog}
        />

        <motion.nav
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="absolute bg-white rounded-lg right-4 top-4 whitespace-nowrap">
            <InstanceHolder
              droneId="1"
              onSetDroneSightings={setDroneSightings}
              selectedLog={selectedLog}
              setSelectedLog={setSelectedLog}
            />
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
