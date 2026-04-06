"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/components/landing/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.55 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.55 });

  return (
    <motion.div
      className={cn("tilt-layer", className)}
      style={{ transformPerspective: 1000, rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        rotateY.set((px - 0.5) * 7);
        rotateX.set(-(py - 0.5) * 7);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
}
