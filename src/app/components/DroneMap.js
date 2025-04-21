"use client"; 
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import InstanceDetailsModal from "./InstanceDetailsModal"
import { useState } from "react";

export default function MapComponent({droneSightings, droneId}) {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  const [selectedInstance, setSelectedInstance] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(null)

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJpYW4tcyIsImEiOiJjbThwZGhncWkwYWlqMnhvZWx2OGl6OHl4In0.F3SE6K76b2eR5Q31eNgJlQ";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12", 
      center: [-121.882, 37.335], 
      zoom: 16, 
    })
    
    // Log the drone ID being used for the map view
    if (droneId) {
      console.log("MapComponent rendering for drone ID:", droneId);
    }



    droneSightings.forEach((sighting) => {
      const marker = new mapboxgl.Marker({color: "red"})
        .setLngLat([sighting.location.longitude, sighting.location.latitude])
        .addTo(mapRef.current)


      marker.getElement().addEventListener("click", () => {
        setSelectedInstance(sighting)
        setIsModalOpen(true)
      })
    })


  
    return () => {
      mapRef.current.remove(); // Clean up when component unmounts
    }
    }, [droneSightings])


  return (
    <div className="w-full h-full relative">
      {droneId && (
        <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-70 text-white px-3 py-2 rounded-md">
          <span className="font-semibold">Drone ID: {droneId}</span>
        </div>
      )}
      <div
        ref={mapContainerRef}
        className="w-full h-full"
      />

      <InstanceDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        instance={selectedInstance}
      />
    </div>
  );
}
