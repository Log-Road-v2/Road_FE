import styled from "@emotion/styled";
import { Font, Color } from "../../../styles";

interface PropsButtonType {
  text?: string;
  disabled?: boolean;
  width?: string;
  onClick?: () => void;
}

const SubmitButton = ({
  text,
  disabled = false,
  width = '360px',
  onClick
}: PropsButtonType) => {
  return (
    <Button
      disabled={disabled}
      width={width}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

const Button = styled.button<{
  disabled?: boolean;
  width?: string;
}>`
  width: ${({ width }) => width};
  height: 44px;
  padding: 12px 56px;
  border-radius: 8px;
  border: none;
  background-color: ${({ disabled }) => disabled ? Color.gray200 : Color.blue500};
  color: ${({ disabled }) => (disabled ? Color.gray400 : Color.white)};
  ${Font.medium14}

  &:hover {
    background-color: ${({ disabled }) => disabled ? Color.gray300 : Color.blue600};
  }
`;

export default SubmitButton;
