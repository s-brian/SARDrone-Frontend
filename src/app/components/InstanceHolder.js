"use client";
import InstanceCard from "./InstanceCard";

 

export default function InstanceHolder(){

	const instances = [
		{ id: 1, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 2, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 3, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 4, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
		{ id: 5, date: "3/12/2025", time: "09:00:00 PM", coords: "37N 121W", detected: false, description: "a man standing in an empty field" },
	  ];

	return(

		<div className="space-y-4">
			{instances.map((instance) => (
				<InstanceCard key={instance.id} instance={instance}/>
			))}
		</div>
	)

}