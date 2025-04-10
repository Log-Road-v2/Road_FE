import styled from "@emotion/styled";
import { Font, Color } from "../../../styles"

interface PropsButtonType {
  text?: string;
  disabled?: boolean
}

const ConfirmButton = ({ text, disabled = false }: PropsButtonType) => {
  return (
    <Button disabled={disabled}>{text}</Button>
  )
}

const Button = styled.button<{
  disabled?: boolean
}>`
  padding: 12px 56px;
  border-radius: 8px;
  border: none;
  background-color: ${({ disabled }) => disabled ? Color.gray200 : Color.blue500};
  color: ${({ disabled }) => disabled ? Color.gray400 : Color.white};
  ${Font.medium14}
`

export default ConfirmButton