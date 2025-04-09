"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function InstanceCard({instance}){

	const [isModalOpen, setIsModalOpen] = useState(false)

	return(
		<div>
			<div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition text-black" onClick={() => setIsModalOpen(true)}>
				<h2>{instance.date}</h2>
				<h2>{instance.time}</h2>
			</div>

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Instance Details</DialogTitle>
						<DialogDescription>More information about the selected instance.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div>
						<h3 className="font-semibold">Date:</h3>
						<p>{instance.date}</p>
						</div>
						<div>
						<h3 className="font-semibold">Time:</h3>
						<p>{instance.time}</p>
						</div>
						<div>
						<h3 className="font-semibold">Coordinates:</h3>
						<p>{instance.coords}</p>
						</div>
						<div>
						<h3 className="font-semibold">Detected:</h3>
						<p>{instance.detected ? "Yes" : "No"}</p>
						</div>
						<div>
						<h3 className="font-semibold">Description:</h3>
						<p>{instance.description}</p>
						</div>
					</div>
			</DialogContent>
			</Dialog>
		</div>
	)
}