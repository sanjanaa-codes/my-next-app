interface TrashIconProps {
  size?: number;
  fill?: string;
    className?: string;
}

export default function TrashIcon({
  size = 20,
  fill = '#000000',
  className='',
}: Readonly<TrashIconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M3.75 5L4.58333 17.9167H15.4167L16.25 5"
        stroke={fill}
        strokeLinecap="square"
      />
      <path d="M2.5 4.5835H17.5" stroke={fill} strokeLinecap="square" />
      <path
        d="M7.125 4.51441C7.35628 3.13479 8.55605 2.0835 10.0014 2.0835C11.4467 2.0835 12.6466 3.13479 12.8778 4.51441"
        stroke={fill}
        strokeLinecap="square"
      />
    </svg>
  );
}
