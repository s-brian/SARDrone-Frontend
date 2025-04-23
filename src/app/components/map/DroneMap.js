"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import InfoModal from "./InfoModal";
import { useState } from "react";

export default function MapComponent({
  droneLogs,
  droneId,
  selectedLog,
  setSelectedLog,
}) {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const markerRefs = useRef([]);
  const defaultZoomRef = useRef(16); // Store the default zoom level
  const defaultCenterRef = useRef([-121.882, 37.335]); // Store the default center
  const activeMarkerRef = useRef(null); // Track the currently active marker

  const [isModalOpen, setIsModalOpen] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJpYW4tcyIsImEiOiJjbThwZGhncWkwYWlqMnhvZWx2OGl6OHl4In0.F3SE6K76b2eR5Q31eNgJlQ";

    if (mapRef.current || !mapContainerRef.current) return;

    // Initialize map with default values
    const defaultCenter = [-121.882, 37.335];
    const defaultZoom = 16;

    // Save default values to refs for later use
    defaultZoomRef.current = defaultZoom;
    defaultCenterRef.current = defaultCenter;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/standard",
      center: defaultCenter,
      zoom: defaultZoom,
      pitch: 45, 
      bearing: -20, 
    });

    if (droneId) {
      console.log("MapComponent rendering for drone ID:", droneId);
    }

    /*
Add click handler to the map to reset zoom when clicking away from markers
mapRef.current.on('style.load', () => {
  mapRef.current.setConfigProperty('basemap', 'showPointOfInterestLabels', false);
});
*/

    mapRef.current.on("click", () => {
      resetMapView();
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Function to reset map to default view
  const resetMapView = () => {
    if (!mapRef.current) return;

    mapRef.current.flyTo({
      center: defaultCenterRef.current,
      zoom: defaultZoomRef.current,
      duration: 1000, // animation duration in milliseconds
    });

    activeMarkerRef.current = null;
  };

  // Function to zoom to a specific marker
  const zoomToMarker = (coordinates) => {
    if (!mapRef.current) return;

    mapRef.current.flyTo({
      center: coordinates,
      zoom: defaultZoomRef.current + 2, // Zoom in a bit more than the default
      duration: 1000, // animation duration in milliseconds
    });
  };

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !droneLogs.length) return;

    // Optional cleanup: remove old markers
    markerRefs.current.forEach((marker) => marker.remove());
    markerRefs.current = [];

    droneLogs.forEach((log) => {
      console.log(log);
      if (!log.hasOwnProperty("score") || log["score"] <= 50) {
        return;
      }
      const coordinates = [log.location.longitude, log.location.latitude];
      const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates)
        .addTo(map);

      marker.getElement().addEventListener("click", (e) => {
        // Prevent the map click event from firing
        e.stopPropagation();

        // Set this marker as active
        activeMarkerRef.current = marker;

        // Zoom to this marker
        zoomToMarker(coordinates);

        // Show the modal with instance details
        setSelectedLog(log);
        setIsModalOpen(true);
      });

      markerRefs.current.push(marker);
    });

    // No need for separate event listener as we handle it in the onOpenChange prop
  }, [droneLogs]);

  return (
    <div className="w-full h-full relative">
      {droneId && (
        <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-70 text-white px-3 py-2 rounded-md">
          <span className="font-semibold">Drone ID: {droneId}</span>
        </div>
      )}

      <div ref={mapContainerRef} className="w-full h-full" />

      <InfoModal
        open={isModalOpen}
        onOpenChange={(open) => {
          setIsModalOpen(open);
          // When modal is closed, reset the map view
          if (!open && activeMarkerRef.current) {
            resetMapView();
          }
        }}
        log={selectedLog}
      />
    </div>
  );
}
