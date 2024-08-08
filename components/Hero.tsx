"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            GEEKTOPIA
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mt-4">
            A Place for All <a className="text-green-400">Geeks</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
