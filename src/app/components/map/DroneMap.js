"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import InfoModal from "./InfoModal";

export default function DroneMap({
  droneLogs = [],
  droneId,
  selectedLog,
  setSelectedLog,
}) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRefs = useRef([]);
  const defaultZoomRef = useRef(16);
  const defaultCenterRef = useRef([-121.882, 37.335]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapInitialized, setMapInitialized] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current || !mapboxgl.supported()) return;

    try {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYnJpYW4tcyIsImEiOiJjbThwZGhncWkwYWlqMnhvZWx2OGl6OHl4In0.F3SE6K76b2eR5Q31eNgJlQ";

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: defaultCenterRef.current,
        zoom: defaultZoomRef.current,
        pitch: 45,
        bearing: -20,
      });

      map.on("load", () => {
        setMapInitialized(true);
      });

      map.on("click", (e) => {
        if (e.originalEvent.target === map.getCanvas()) {
          resetMapView();
        }
      });

      mapRef.current = map;
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const resetMapView = () => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: defaultCenterRef.current,
      zoom: defaultZoomRef.current,
      pitch: 45,
      bearing: -20,
      duration: 1000,
    });
  };

  const zoomToMarker = (coordinates) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: coordinates,
      zoom: defaultZoomRef.current + 2,
      duration: 1000,
    });
  };

  // Handle selectedLog changes
  useEffect(() => {
    if (selectedLog?.location && mapInitialized) {
      const coordinates = [selectedLog.location.longitude, selectedLog.location.latitude];
      zoomToMarker(coordinates);
    }
  }, [selectedLog, mapInitialized]);

  // Handle markers
  useEffect(() => {
    if (!mapRef.current || !mapInitialized || !droneLogs.length) return;

    // Clear existing markers
    markerRefs.current.forEach((marker) => marker.remove());
    markerRefs.current = [];

    // Add new markers
    droneLogs.forEach((log) => {
      if (!log.hasOwnProperty("score") || log.score <= 50) return;

      const coordinates = [log.location.longitude, log.location.latitude];
      const marker = new mapboxgl.Marker({ color: "#ff0000" })
        .setLngLat(coordinates)
        .addTo(mapRef.current);

      marker.getElement().addEventListener("click", () => {
        if (typeof setSelectedLog === 'function') {
          setSelectedLog(log);
          setIsModalOpen(true);
        }
      });

      markerRefs.current.push(marker);
    });
  }, [droneLogs, setSelectedLog, mapInitialized]);

  return (
    <>
      <div ref={mapContainerRef} className="w-full h-full" />
      <InfoModal
        open={isModalOpen}
        onOpenChange={(open) => {
          setIsModalOpen(open);
          if (!open && typeof setSelectedLog === 'function') {
            setSelectedLog(null);
            resetMapView();
          }
        }}
        log={selectedLog}
      />
    </>
  );
}
