import styled from "@emotion/styled";
import { Font, Color } from "../../../styles";
import { useSendVerificationCode } from "../../../apis/auth";

interface PropsType {
  value?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const EmailInput = ({
  value,
  type = "email",
  placeholder = "입력해주세요",
  label = "",
  onChange,
  onKeyDown,
  ...props
}: PropsType) => {
  const { mutate: sendCode } = useSendVerificationCode();

  const handleSendCode = () => {
    if (!value) return;
    sendCode(value);
  };

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputFieldWrapper>
        <InputBox
          type={type}
          value={type === "file" ? undefined : value}
          placeholder={placeholder}
          {...props}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <SendText onClick={handleSendCode}>인증번호 전송</SendText>
      </InputFieldWrapper>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 360px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.p`
  color: ${Color.gray500};
  ${Font.regular14}
`;

const InputFieldWrapper = styled.div`
  position: relative;
`;

const InputBox = styled.input<{
  isError?: boolean;
}>`
  width: 100%;
  padding: 12px 100px 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => (isError ? Color.red400 : Color.gray300)};
  background-color: ${Color.white};
  ${Font.regular14}

  &:focus {
    border: 1px solid ${Color.gray400};
  }

  &[type="file"] {
    color: ${Color.gray700};

    &::file-selector-button {
      display: none;
    }

    &::-webkit-file-upload-button {
      display: none;
    }
  }
`;

const SendText = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  color: ${Color.blue500};
  ${Font.semi12};
  cursor: pointer;

  &:hover {
    color: ${Color.blue700};
  }
`;

export default EmailInput;
