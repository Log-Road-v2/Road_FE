import { IconProps } from "./interface";

export const Bookmark = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M6 19.5V5.616c0-.46.154-.845.463-1.153A1.57 1.57 0 0 1 7.616 4h8.769c.46 0 .844.154 1.153.463.309.309.463.693.462 1.153V19.5l-6-2.577L6 19.5Z" />
    </svg>
  )
} 