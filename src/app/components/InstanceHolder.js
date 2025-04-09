"use client";
import InstanceCard from "./InstanceCard";
import { motion } from "framer-motion"  // Import motion from framer-motion

 

export default function InstanceHolder(){

	const instances = [
		{ id: 1, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 2, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 3, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 4, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 5, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 6, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 7, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 8, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 9, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 10, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 11, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 12, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 13, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 14, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 15, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 16, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 17, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 18, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 19, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 20, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
	  ];

	return(
		<div className="h-[80vh] overflow-y-auto flex flex-col space-y-4">
		{instances.map((instance) => (
			<InstanceCard key={instance.id} instance={instance}/>
		))}
		</div>
	)

}