"use client"; 
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import InstanceDetailsModal from "./InstanceDetailsModal"

export default function MapComponent({droneSightings}) {
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
      center: [-121.881, 37.3352], 
      zoom: 11, 
    })



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
