"use client";

export default function InstanceCard({instance}){
	return(
		<div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition text-black">
			<h2>{instance.date}</h2>
			<h2>{instance.time}</h2>
		</div>
	)
}