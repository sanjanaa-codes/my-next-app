import React from 'react';

type PlusProps = {
  readonly size?: number;
  className?: string;
};

export default function Plus({ size = 24, className = " " }: PlusProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="black" />
    </svg>
  );
}
