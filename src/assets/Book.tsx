import { IconProps } from "./interface";

const rotationAngles: { [key: string]: string } = {
  right: "90",
  top: "0",
  bottom: "180",
  left: "-90",
};

interface ArrowProps extends IconProps {
  rotate?: "top" | "bottom" | "left" | "right";
}

export const Arrow = ({ size = 24, color = "#000", rotate="top", onClick }: ArrowProps) => {
  const rotation = rotationAngles[rotate] || rotationAngles["top"];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)` }} onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14-5-5-5 5" />
    </svg>
  )
} 