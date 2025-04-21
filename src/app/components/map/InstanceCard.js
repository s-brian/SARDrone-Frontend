"use client";
import { useState } from "react";
import InstanceDetailsModal from "./InfoModal"

export default function InstanceCard({instance}){

	const [isModalOpen, setIsModalOpen] = useState(false)
	const timestamp = instance.timestamp
	const date = new Date(timestamp)

	return(
		<div>
			<div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition text-black" onClick={() => setIsModalOpen(true)}>
				<h2>{date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "2-digit" })}</h2>
				<h2>{date.toLocaleTimeString("en-US", { hour12: false })}</h2>
			</div>
            <InstanceDetailsModal 
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                instance={instance}
            />
		</div>
	)
}