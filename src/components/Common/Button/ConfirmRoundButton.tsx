import styled from "@emotion/styled"
import { Font, Color } from "../../../styles"

interface PropsType {
  text?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ConfirmRoundButton = ({ text, onClick }: PropsType) => {
  return (
    <Button onClick={onClick}>{text}</Button>
  )
}

const Button = styled.button`
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 12px 36px;
  border-radius: 20px;
  border: none;
  background-color: ${Color.gray800};
  color: ${Color.white};
  ${Font.semi14}
`

export default ConfirmRoundButton;