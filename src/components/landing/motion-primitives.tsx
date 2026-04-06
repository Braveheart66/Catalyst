"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/components/landing/utils";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type RevealSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function RevealSection({ id, className, children }: RevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, {
    amount: 0.2,
    once: true,
    margin: "0px 0px -8% 0px",
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
}

type RevealItemProps = {
  className?: string;
  children: React.ReactNode;
};

export function RevealItem({ className, children }: RevealItemProps) {
  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}

export const animatedItemVariants = itemVariants;
