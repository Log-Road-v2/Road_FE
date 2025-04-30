import styled from "@emotion/styled"
import { Font, Color } from "../../../styles"

interface PropsType {
  text?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const RoundButton = ({ text, onClick }: PropsType) => {
  return (
    <Button onClick={onClick}>{text}</Button>
  )
}

const Button = styled.button`
  display: inline-flex; 
  justify-content: center;
  align-items: center;
  padding: 12px 36px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: ${Color.gray800};
  color: ${Color.white};
  ${Font.medium14}

  &:hover {
    background-color: ${Color.gray700};
  }

  &:focus {
    background-color: ${Color.gray700};
  }
`

export default RoundButton;