
type IconProps = {
  stroke?: string;
  size: number | string;
  className?: string;
};

export default function Cart({ stroke = '#000000', size , className = '' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 22 19"
      fill="none"
    >
      <path
        d="M0.5 0.5H2.5L3.19231 3.5M3.19231 3.5L5.5 13.5H18.5L20.5 3.5H3.19231ZM9.5 17C9.5 17.8284 8.82843 18.5 8 18.5C7.17157 18.5 6.5 17.8284 6.5 17C6.5 16.1716 7.17157 15.5 8 15.5C8.82843 15.5 9.5 16.1716 9.5 17ZM17.5 17C17.5 17.8284 16.8284 18.5 16 18.5C15.1716 18.5 14.5 17.8284 14.5 17C14.5 16.1716 15.1716 15.5 16 15.5C16.8284 15.5 17.5 16.1716 17.5 17Z"
        stroke={stroke}
        strokeLinecap="square"
      />
    </svg>
  );
}
