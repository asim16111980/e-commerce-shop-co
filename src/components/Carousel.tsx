"use client";

import { SLIDERS_IMAGES } from "@/constants/slidersImages";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, wrap } from "motion/react";
import Slide from "./Slide";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [navDirection, setNavDirection] = useState<1 | -1>(1);
  const currentImage = SLIDERS_IMAGES[currentSlide];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const setSlide = (newDirection: 1 | -1) => {
    console.log("t");
    const nextSlide = wrap(
      1,
      SLIDERS_IMAGES.length,
      currentSlide + newDirection
    );
    setCurrentSlide(nextSlide);
    setNavDirection(newDirection);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setSlide(1);
  
      
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[536px] flex overflow-hidden">
        <AnimatePresence custom={navDirection} mode="sync" initial={false}>
          <Slide
            key={currentSlide}
            src={`/images/carousel/${currentImage}`}
            alt={currentImage}
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#34383900] from-83% to-[#34383965] to-100%">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => setSlide(-1)}
          // onMouseEnter={() => stopAutoPlay()}
          // onMouseLeave={() => startAutoPlay()}
          className="size-12 flex items-center justify-center rounded-full shadow-sm bg-white text-gray-500 absolute left-8 top-1/2 transform -translate-y-1/2"
        >
          <ArrowLeft className="size-8" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => setSlide(1)}
          className="size-12 flex items-center justify-center rounded-full shadow-sm bg-white text-gray-500 absolute right-8 top-1/2 transform -translate-y-1/2"
        >
          <ArrowRight className="size-8" />
        </button>
        <div className="absolute w-20 h-2 flex items-center gap-4 bottom-10 transform -translate-x-1/2 left-1/2">
          <span className="w-8 h-full rounded-full bg-gray-50"></span>
          <span className="w-2 h-full rounded-full bg-gray-50"></span>
          <span className="w-2 h-full rounded-full bg-gray-50"></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
