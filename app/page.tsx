"use client";
import Spline from "@splinetool/react-spline";
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Spline as background */}
      <Spline
        className="fixed inset-0 z-0 w-full h-full"
        scene="https://draft.spline.design/sTM-lPPVR1G94Wdf/scene.splinecode"
      />
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-2xl w-full pl-4 sm:pl-8 md:pl-20 pr-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Mi Electric Scooter Pro 2
          <br />
          Smart, Powerful, and Portable
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">
          Smooth, powerful, and portable — the Xiaomi Mi Electric Scooter Pro 2
          offers up to 45km range, 25 km/h speed, and folds in seconds for easy
          city travel.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <span className="text-3xl font-bold text-white">AED 1500</span>
        </div>
        <div className="flex gap-4 relative">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition relative"
            onClick={() => setCount(count + 1)}
          >
            Buy Now
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
