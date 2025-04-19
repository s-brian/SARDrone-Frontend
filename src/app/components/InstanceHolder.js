"use client";
import InstanceCard from "./InstanceCard";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"  

 

export default function InstanceHolder({onSetDroneSightings}){

	const socketRef = useRef(null)

	useEffect(() => {
		let droneId = 1
		const wsurl = `wss://api.meritdrone.site/drone/ws/${droneId}`;
		socketRef.current = new WebSocket(wsurl);

		socketRef.current.onopen = () => {
      console.log('WebSocket connected to drone');
    };

    socketRef.current.onmessage = (event) => {
			try{
				const data = JSON.parse(event.data)
				console.log('Drone data: ', data)
			} catch (err){
				console.log('Invalid JSON from websocket: ', event.data)
			}
      
    };
	onSetDroneSightings(droneSightings)

    return () => {
      socketRef.current?.close();
    };
	}, [])

	const instances = [
		{
			location: {
				latitude: 37.3352,
				longitude: -121.8811,
				altitude: 150
			},
			timestamp: 1710284400000,
			status: "detected",
			image: "image1.jpg",
			text: "Person detected near the Student Union",
			score: 0.95,
			bounding_boxes: [[120, 80, 300, 400]]
		},
		{
			location: {
				latitude: 37.3360,
				longitude: -121.8805,
				altitude: 160
			},
			timestamp: 1710285300000,
			status: "undetected",
			image: "image2.jpg",
			text: "No movement detected near engineering building",
			score: 0.12,
			bounding_boxes: []
		},
		{
			location: {
				latitude: 37.3345,
				longitude: -121.8820,
				altitude: 155
			},
			timestamp: 1710286200000,
			status: "detected",
			image: "image3.jpg",
			text: "Suspicious figure detected behind MLK Library",
			score: 0.83,
			bounding_boxes: [[200, 150, 350, 500]]
		},
		{
			location: {
				latitude: 37.3358,
				longitude: -121.8818,
				altitude: 145
			},
			timestamp: 1710287100000,
			status: "detected",
			image: "image4.jpg",
			text: "Two heat signatures walking toward fountain",
			score: 0.91,
			bounding_boxes: [[100, 100, 200, 300], [300, 120, 400, 310]]
		},
		{
			location: {
				latitude: 37.3350,
				longitude: -121.8808,
				altitude: 170
			},
			timestamp: 1710288000000,
			status: "undetected",
			image: "image5.jpg",
			text: "Area clear near Spartan Complex",
			score: 0.05,
			bounding_boxes: []
		},
		{
			location: {
				latitude: 37.3362,
				longitude: -121.8815,
				altitude: 165
			},
			timestamp: 1710288900000,
			status: "detected",
			image: "image6.jpg",
			text: "Drone picked up fast-moving object on 7th street",
			score: 0.76,
			bounding_boxes: [[150, 130, 290, 410]]
		}
	];
	

	const droneSightings = instances.filter(inst => inst.status === "detected")

	
	return(
		<div className="h-[80vh] overflow-y-auto flex flex-col space-y-4">
		{instances.map((instance) => (
			<InstanceCard key={instance.timestamp} instance={instance}/>
		))}
		</div>
	)

}