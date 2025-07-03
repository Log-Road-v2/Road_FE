import { IconProps } from "./interface";

export const X = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
} 