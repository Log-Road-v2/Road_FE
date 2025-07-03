import { IconProps } from "./interface";

export const Add = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" d="M18 12h-6m0 0H6m6 0V6m0 6v6" />
    </svg>
  )
} 