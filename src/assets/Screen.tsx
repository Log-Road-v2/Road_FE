import { IconProps } from "./interface";

export const Screen = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M21.75 6V4.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5V6a1.5 1.5 0 0 0 1.5 1.5v9H3A.75.75 0 1 0 3 18h8.25v1.63a2.25 2.25 0 1 0 1.5 0V18H21a.75.75 0 1 0 0-1.5h-.75v-9a1.5 1.5 0 0 0 1.5-1.5ZM12 22.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-8.25-18h16.5V6H3.75V4.5Zm15 12H5.25v-9h13.5v9Z" />
    </svg>
  )
} 