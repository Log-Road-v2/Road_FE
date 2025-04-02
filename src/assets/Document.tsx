import { IconProps } from "./interface";

export const Document = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="m23.777 17.027-6.527 6.54-3.152-3.165 1.054-1.054 2.098 2.086 5.473-5.461 1.054 1.054ZM13.5 7.5v-6H3v21h10.5V24h-12V0h13.066L21 6.434V15l-1.5 1.5v-9h-6ZM15 6h3.434L15 2.566V6Z" />
    </svg>
  )
} 