"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

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

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Instance Details</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div>
						<h3 className="font-semibold">Date:</h3>
						<p>{date.toString()}</p>
						</div>
						<div>
						<h3 className="font-semibold">Coordinates:</h3>
						<p>Longitude: {instance.location.longitude}</p>
						<p>Latitude: {instance.location.latitude}</p>

						</div>
						<div>
						<h3 className="font-semibold">Detected:</h3>
						<p>{instance.status ? "Yes" : "No"}</p>
						</div>
						<div>
						<h3 className="font-semibold">Description:</h3>
						<p>{instance.text}</p>
						</div>
					</div>
			</DialogContent>
			</Dialog>
		</div>
	)
}