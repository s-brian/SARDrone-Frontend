"use client"; 
import InstanceHolder from "../components/InstanceHolder";
import MapComponent from "../components/MapComponent"
import { motion } from "framer-motion";


export default function Map() {
  return(
    <div id="map-container" className="flex flex-row relative w-full h-full bg-gray-500">
      <MapComponent></MapComponent>
      <motion.nav
        initial={{x: 200}}
        animate={{x: 0}}
      	transition={{ type: "spring", stiffness: 50 }}
        >
        <div className="absolute bg-white rounded-lg right-4 top-4 whitespace-nowrap">
          <InstanceHolder></InstanceHolder>
        </div>
      </motion.nav>
      
    </div>
  )
}
