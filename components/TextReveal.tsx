'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type TextRevealProps = {
  text: string;
  className?: string;
};

export function TextReveal({ text, className }: TextRevealProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { amount: 0.6, margin: '-10% 0px', once: false });

  const characters = Array.from(text);

  return (
    <p
      ref={ref}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: '110%', opacity: 0 }}
          animate={
            isInView
              ? { y: '0%', opacity: 1 }
              : { y: '110%', opacity: 0 }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.02,
            ease: [0.19, 1, 0.22, 1]
          }}
          className="inline-block will-change-transform"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </p>
  );
}

