"use client";

import { motion, type Variants, type Transition } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const generate = (direction: Direction, delay: number): Variants => {
  const transition: Transition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
    delay,
  };

  switch (direction) {
    case "left":
      return {
        hidden: { filter: "blur(10px)", opacity: 0, x: -60 },
        visible: { filter: "blur(0px)", opacity: 1, x: 0, transition },
      };
    case "right":
      return {
        hidden: { filter: "blur(10px)", opacity: 0, x: 60 },
        visible: { filter: "blur(0px)", opacity: 1, x: 0, transition },
      };
    case "down":
      return {
        hidden: { filter: "blur(10px)", opacity: 0, y: 60 },
        visible: { filter: "blur(0px)", opacity: 1, y: 0, transition },
      };
    case "up":
    default:
      return {
        hidden: { filter: "blur(10px)", opacity: 0, y: -60 },
        visible: { filter: "blur(0px)", opacity: 1, y: 0, transition },
      };
  }
};

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={generate(direction, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
