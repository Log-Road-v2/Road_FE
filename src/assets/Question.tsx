import { IconProps } from "./interface";

export const Question = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M10.75 15.75h2.5v2.5h-2.5v-2.5Z" />
      <path fill={color} fill-rule="evenodd" d="M12 8c-1.195 0-2 1.086-2 2H8c0-1.802 1.496-4 4-4 2.496 0 4 2.142 4 4 0 1.578-1.108 2.378-1.794 2.873l-.116.084c-.755.552-1.09.866-1.09 1.543h-2c0-1.762 1.161-2.61 1.907-3.155l.003-.002c.832-.609 1.09-.84 1.09-1.343 0-.95-.796-2-2-2Z" clip-rule="evenodd" />
    </svg>
  )
} 