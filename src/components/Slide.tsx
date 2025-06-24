import { SlideProps } from "@/types/slide";
import { motion, usePresenceData } from "motion/react";
import Image from "next/image";

const Slide = ({ src, alt }: SlideProps) => {
  const navDirection = usePresenceData();
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ x: `${navDirection * -100}%`, opacity: 0 }}
      animate={{
        x: "0%",
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      exit={{
        x: `${navDirection * 100}%`,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <Image src={src} alt={alt} fill />
    </motion.div>
  );
};

export default Slide;
