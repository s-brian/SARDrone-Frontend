import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  // const pathname = await headers().get("x-next-pathname") || "";
  // const showFooter = !pathname.startsWith("/map");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col ">
          <Navbar />
          <div className="flex-grow overflow-auto">{children}</div>
          {/* {showFooter && <Footer />} */}
        </div>
      </body>
    </html>
  );
}
