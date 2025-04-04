import { IconProps } from "./interface";

export const Search = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} fill-rule="evenodd" d="M10.5 5.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-6.5 5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z" clip-rule="evenodd" />
      <path fill={color} fill-rule="evenodd" d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  )
} 