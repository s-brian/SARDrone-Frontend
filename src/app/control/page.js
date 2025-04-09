"use client"
import { Button } from "@/components/ui/button";

export default function Control() {

	const handleClick = () => {
		alert('BOOOM')
	}

	return (
	  <div className="flex justify-center items-center min-h-screen">
		<Button onClick={handleClick} className="px-100 py-50 text-5xl active:scale-95 transition-transform" variant="destructive">SELF DESTRUCT</Button>
	  </div>
	);
  }
  