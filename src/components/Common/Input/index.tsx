import { useState } from "react";
import styled from "@emotion/styled";
import { Font, Color } from "../../../styles"

interface PropsType {
  value: string,
  placeholder: string,
  label: string,
  error: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  placeholder = "",
  label,
  error,
  onChange,
  ...props
}: PropsType) => {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputBox
        value={value}
        placeholder={placeholder}
        max={9999}
        min={1000}
        {...props}
        onChange={onChange}
      />

      {isError && error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.p`
  color: ${Color.gray500};
  ${Font.regular14}
`

const InputBox = styled.input<{
  isError?: boolean
}>`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => isError ? Color.red400 : Color.gray300};
  background-color: ${Color.white};
  ${Font.regular14}

  &:focus {
    border: 1px solid ${Color.gray400};
  }
`

const ErrorText = styled.p`
color: ${Color.red500};
  ${Font.regular14}
`

export default Input