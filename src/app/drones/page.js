"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserCircle, Shield, ShieldCheck, Cpu, LogOut } from "lucide-react";

export default function DronesPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        // Fetch user data from the API
        const response = await fetch("https://api.meritdrone.site/login/drones", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


        if (response.status === 401) {
          // Token expired — perform logout
          localStorage.removeItem("authToken"); // if stored
          window.dispatchEvent(new Event('storage'));
          router.push("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch drone access information");
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  // Filter read-only drones (drones in read_drones but not in write_drones)
  const getReadOnlyDrones = () => {
    if (!userData) return [];
    
    return userData.read_drones.filter(
      drone => !userData.write_drones.includes(drone)
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-6 max-w-lg w-full text-center">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
          <button
            onClick={() => router.push("/login")}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    // Remove the auth token from localStorage
    localStorage.removeItem("authToken");
    
    // Trigger a storage event so other components (like Navbar) can react
    window.dispatchEvent(new Event('storage'));
    
    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with user info */}
      <header className="bg-gray-900 p-6 border-b border-gray-800">
        <div className="container mx-auto flex items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
              <UserCircle size={36} className="text-gray-400" />
              {/* This would be replaced with an actual image if you have user avatars */}
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-bold">Welcome, {userData?.username}</h1>
              <p className="text-sm text-gray-400">Drone Control Dashboard</p>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Write access drones section */}
        {userData?.write_drones.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <ShieldCheck className="mr-2 text-green-500" size={20} />
              <h2 className="text-xl font-bold">Control Access Drones</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {userData.write_drones.map((drone) => (
                <motion.div
                  key={drone}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-red-500 transition-all"
                  onClick={() => router.push(`/map/${drone}`)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Cpu className="mr-2 text-red-500" size={18} />
                      <h3 className="font-semibold">{drone}</h3>
                    </div>
                    <div className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">
                      Control
                    </div>
                  </div>
                  <div className="bg-black/30 rounded h-32 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Drone Status</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Read-only drones section */}
        {getReadOnlyDrones().length > 0 && (
          <section>
            <div className="flex items-center mb-4">
              <Shield className="mr-2 text-blue-500" size={20} />
              <h2 className="text-xl font-bold">View-Only Drones</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {getReadOnlyDrones().map((drone) => (
                <motion.div
                  key={drone}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all"
                  onClick={() => router.push(`/map/${drone}`)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Cpu className="mr-2 text-blue-500" size={18} />
                      <h3 className="font-semibold">{drone}</h3>
                    </div>
                    <div className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">
                      View Only
                    </div>
                  </div>
                  <div className="bg-black/30 rounded h-32 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Drone Status</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {userData && userData.write_drones.length === 0 && getReadOnlyDrones().length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-800 rounded-lg p-8 max-w-lg mx-auto">
              <h2 className="text-xl font-bold mb-4">No Drone Access</h2>
              <p className="text-gray-400">You don't have access to any drones yet. Contact your administrator for access.</p>
            </div>
          </div>
        )}
        
        {/* Logout Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
          >
            <LogOut className="mr-2" size={18} />
            Logout
          </motion.button>
        </div>
      </main>
    </div>
  );
}
