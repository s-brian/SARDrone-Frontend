"use client"; 
import InstanceHolder from "../components/InstanceHolder";
import MapComponent from "../components/MapComponent"


export default function Map() {
  return(
    <div id="map-container" className="flex flex-row relative w-full h-full bg-gray-500">
      <MapComponent></MapComponent>
      <div className="absolute bg-white rounded-lg right-4 top-4">
        <InstanceHolder></InstanceHolder>
      </div>
    </div>
  )
}
