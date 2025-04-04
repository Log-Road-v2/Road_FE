import { IconProps } from "./interface";

export const Writer = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M13.81 22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09-.34 0-.67.04-1 .09V9h-5V4H6v16h7.09c.12.72.37 1.39.72 2ZM23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Z" />
    </svg>  
  )
} 