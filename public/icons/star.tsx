import React from "react";

interface IconProps {
  fill?: string;
  size?: number;
  stroke?: string;
  className?: string;
}

StarIcon.defaultProps = {
  stroke: "#000",
  size: 20,
  className: "",
};

export default function StarIcon({ fill, size, stroke, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 15 14"
      fill="none"
      stroke={stroke}
      className={className}
    >
      <path
        d="M7.5013 1.75L9.26787 5.44797L13.3346 5.98345L10.3596 8.80442L11.1065 12.8333L7.5013 10.8788L3.8961 12.8333L4.64297 8.80442L1.66797 5.98345L5.73475 5.44797L7.5013 1.75Z"
        fill={fill}
      />
    </svg>
  );
}
