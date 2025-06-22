import { SLIDERS_IMAGES } from "@/constants/slidersImages";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative w-full">
      <div className="size-full">
        {SLIDERS_IMAGES.map((image, index) => (
          <Image
            key={index}
            src={`/images/carousel/${image}`}
            alt="Slider 1"
            width={1120}
            height={536}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#34383900] from-83% to-[#34383965] to-100%">
        <button
          type="button"
          className="size-12 flex items-center justify-center rounded-full shadow-sm bg-white text-gray-500 absolute left-8 top-1/2 transform -translate-y-1/2"
        >
          <ArrowLeft className="size-8" />
        </button>
        <button
          type="button"
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
