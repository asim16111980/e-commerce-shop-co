import { SlideProps } from "@/types/slide";
import { motion, usePresenceData } from "motion/react";
import Image from "next/image";

const Slide = ({ src, alt }: SlideProps) => {
    const navDirection= usePresenceData();
  return (
    <motion.div
      className="min-w-full min-h-full flex items-center justify-center"
      initial={{x:0, opacity: 0 }}
      animate={{x:"100%", opacity: 1 }}
      exit={navDirection==="left"?{x:"-100%", opacity: 0 }:{x:"100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={src} alt={alt} fill />
    </motion.div>
  );
};

export default Slide;
