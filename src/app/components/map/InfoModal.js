"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";

export default function LogDetailsModal({ open, onOpenChange, log }) {
  const imageRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [boxes, setBoxes] = useState([]);

  if (!log) return null;

  const date = new Date(log.timestamp * 1000);

  const handleImageLoad = () => {
    if (!imageRef.current) return;

    const { width, height } = imageRef.current;
    setImageDimensions({ width, height });

    const scaleX = width / 1000;
    const scaleY = height / 1000;

    let parsed = [];

    try {
      if (typeof log.bounding_boxes === "string" && log.bounding_boxes.trim()) {
        parsed = JSON.parse(log.bounding_boxes);
      } else if (Array.isArray(log.bounding_boxes)) {
        parsed = log.bounding_boxes;
      } else {
        console.warn(
          "Bounding boxes not a string or is empty:",
          log.bounding_boxes
        );
      }

      const scaledBoxes = parsed
        .filter(
          (box) =>
            Array.isArray(box) &&
            box.length === 4 &&
            box.every((n) => typeof n === "number" && !isNaN(n))
        )
        .map(([x1, y1, x2, y2]) => ({
          left: x1 * scaleX,
          top: y1 * scaleY,
          width: (x2 - x1) * scaleX,
          height: (y2 - y1) * scaleY,
        }));

      setBoxes(scaledBoxes);
    } catch (e) {
      console.error("Error parsing bounding boxes:", e);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] !items-start !block overflow-hidden bg-gray-50">
        <DialogHeader className="pb-2 bg-gray-50 ">
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Log Details
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(90vh-6rem)] py-4">
          <div className="flex flex-col gap-6">
            {log.image && (
              <div className="w-full">
                <div className="relative inline-block w-full bg-black rounded-lg overflow-hidden shadow-lg">
                  <img
                    ref={imageRef}
                    src={`data:image/jpeg;base64,${log.image}`}
                    alt="Drone capture"
                    className="w-full max-h-[50vh] object-contain"
                    onLoad={handleImageLoad}
                  />
                  {/* Only render boxes if Gemini detected a human */}
                  {log.status &&
                    boxes.map((box, index) => (
                      <div
                        key={index}
                        className="absolute border-2 border-red-500 rounded-sm pointer-events-none"
                        style={{
                          left: `${box.left}px`,
                          top: `${box.top}px`,
                          width: `${box.width}px`,
                          height: `${box.height}px`,
                          boxShadow: "0 0 0 1px rgba(0,0,0,0.3)",
                        }}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Info Cards */}
            <div className="grid gap-4 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Detection Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        log.score > 50 ? "bg-red-500" : "bg-gray-400"
                      }`}
                    ></div>
                    <h3 className="font-medium text-gray-700">
                      Human Detection
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {log.score > 50 ? "Human Detected" : "No Human Detected"}
                    <span className="text-sm text-gray-500 ml-1">
                      ({Math.round(log.score)}% confidence)
                    </span>
                  </p>
                </div>

                {/* Time Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <h3 className="font-medium text-gray-700">Time</h3>
                  </div>
                  <p className="text-gray-600">
                    {date.toLocaleString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </p>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <h3 className="font-medium text-gray-700">Location</h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <span className="text-gray-500">Lat:</span>{" "}
                      {log.location.latitude.toFixed(6)}
                    </p>
                    <p className="text-gray-600">
                      <span className="text-gray-500">Long:</span>{" "}
                      {log.location.longitude.toFixed(6)}
                    </p>
                    <p className="text-gray-600">
                      <span className="text-gray-500">Alt:</span>{" "}
                      {log.location.altitude.toFixed(1)}m
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              {log.text && (
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <h3 className="font-medium text-gray-700">
                      Additional Information
                    </h3>
                  </div>
                  <p className="text-gray-600">{log.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
