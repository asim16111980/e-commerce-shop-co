import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative">
      <div className="size-10">
        <Image src='/images/carousel/slider-1.png' alt="Slider 1" fill />
      </div>
      <div className="absolute ">
        <button type="button">
          <CircleArrowLeft />
        </button>
        <button type="button">
          <CircleArrowRight />
        </button>
      </div>
      <div className="absolute ">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Carousel;
