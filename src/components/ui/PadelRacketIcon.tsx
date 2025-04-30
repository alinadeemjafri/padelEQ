import React from "react";

const PadelRacketIcon = ({ size = 28, color = "#2563eb", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="32" cy="22" rx="22" ry="20" />
    <rect x="28" y="42" width="8" height="16" rx="3" />
    <line x1="32" y1="42" x2="32" y2="58" />
    <line x1="30" y1="50" x2="34" y2="54" />
    <line x1="34" y1="50" x2="30" y2="54" />
    {/* Dots on the racket face */}
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => {
        const cx = 20 + col * 6;
        const cy = 10 + row * 5;
        const dx = cx - 32;
        const dy = cy - 22;
        if ((dx * dx) / (22 * 22) + (dy * dy) / (20 * 20) < 1)
          return <circle key={`${row}-${col}`} cx={cx} cy={cy} r="1.2" fill={color} />;
        return null;
      })
    )}
    {/* Triangle at the throat */}
    <polygon points="28,38 36,38 32,30" fill="none" stroke={color} />
  </svg>
);

export default PadelRacketIcon; 