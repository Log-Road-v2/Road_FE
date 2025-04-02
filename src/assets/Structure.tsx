import { IconProps } from "./interface";

export const Structure = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M15.5 20.5v-3h-4v-10h-3v3h-6v-7h6v3h7v-3h6v7h-6v-3h-3v9h3v-3h6v7h-6Zm1-11h4v-5h-4v5Zm0 10h4v-5h-4v5Zm-13-10h4v-5h-4v5Z" />
    </svg>
  )
} 