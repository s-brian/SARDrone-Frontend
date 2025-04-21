"use client";
import InstanceHolder from "../../components/InstanceHolder";
import MapComponent from "../../components/MapComponent";
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
      <div
        id="map-container"
        className="flex flex-row relative w-full h-full bg-white"
      >
        <MapComponent droneSightings={droneSightings} droneId={droneId}></MapComponent>

        <motion.nav
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="absolute bg-white rounded-lg right-4 top-4 whitespace-nowrap">
            <InstanceHolder
              droneId={droneId}
              onSetDroneSightings={setDroneSightings}
            ></InstanceHolder>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
