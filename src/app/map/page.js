"use client"; 
import InstanceHolder from "../components/InstanceHolder";
import MapComponent from "../components/MapComponent"
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Map() {

  const [droneSightings, setDroneSightings] = useState([])

  return(
    <div className="h-screen overflow-hidden">
      <Navbar></Navbar>
      <div id="map-container" className="flex flex-row relative w-full h-screen bg-white">

      <MapComponent droneSightings={droneSightings}></MapComponent>

        <motion.nav
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{ type: "spring", stiffness: 50 }}
          >
          <div className="absolute bg-white rounded-lg right-4 top-4 whitespace-nowrap">
            <InstanceHolder onSetDroneSightings={setDroneSightings}></InstanceHolder>
          </div>
        </motion.nav>
        
      </div>
    </div>
  )
}
