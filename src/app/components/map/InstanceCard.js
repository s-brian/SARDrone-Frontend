"use client";
import { useState } from "react";
import InfoModal from "./InfoModal";

export default function InstanceCard({ selectedLog }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timestamp = selectedLog.timestamp;
  const date = new Date(timestamp);

  return (
    <div>
      <div
        className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition text-black"
        onClick={() => setIsModalOpen(true)}
      >
        <h2>
          {date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </h2>
        {selectedLog.text && (
          <p className="text-sm text-gray-600 truncate overflow-hidden whitespace-nowrap mt-1">
            {selectedLog.text}
          </p>
        )}
      </div>
      <InfoModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        log={selectedLog}
      />
    </div>
  );
}
