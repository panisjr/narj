"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export default function FancyButton({
  name,
  borderColor,
  bgColor,
}: {
  name: string;
  borderColor: string;
  bgColor: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showRipple, setShowRipple] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    setShowRipple(true);
  };

  const handleMouseLeave = () => {
    setShowRipple(false);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden px-6 py-3 text-black border rounded-md ${borderColor}`}
    >
      <span className="relative z-10">{name}</span>

      {showRipple && (
        <motion.span
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`absolute rounded-full pointer-events-none ${bgColor}`}
          style={{
            top: coords.y,
            left: coords.x,
            width: "15px",
            height: "15px",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </button>
  );
}
