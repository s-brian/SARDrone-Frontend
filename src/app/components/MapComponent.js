"use client"; 
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapComponent() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJpYW4tcyIsImEiOiJjbThwZGhncWkwYWlqMnhvZWx2OGl6OHl4In0.F3SE6K76b2eR5Q31eNgJlQ";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12", // You can change this style as needed
      center: [-121.881, 37.3352], // SJSU
      zoom: 11, 
    });

    return () => {
      mapRef.current.remove(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <div
      id="map-container"
      ref={mapContainerRef}
      className="w-full h-full" // Ensure this fills the container
    />
  );
}
