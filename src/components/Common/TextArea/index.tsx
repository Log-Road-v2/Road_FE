import styled from "@emotion/styled";
import { useState } from "react";
import { Color, Font } from "../../../styles";

const MAX_LENGTH = 100;

const TextArea = () => {
  const [text, setText] = useState("");

  const isError = text.length > MAX_LENGTH;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Wrapper>
      <TextareaBox isError={isError}>
        <StyledTextArea
          placeholder="간단한 내용을 입력해주세요"
          value={text}
          onChange={handleChange}
        />
        <CharCount isError={isError}>
          {`${text.length} / ${MAX_LENGTH}`}
        </CharCount>
      </TextareaBox>
    </Wrapper>
  );
};

export default TextArea;

interface ErrorProps {
  isError?: boolean;
}

const Wrapper = styled.div`
  flex: 1;
`;

const TextareaBox = styled.div<ErrorProps>`
  position: relative;
  border: 1px solid ${({ isError }) => (isError ? Color.red400 : Color.gray300)};
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    border: 1px solid
      ${({ isError }) => (isError ? Color.red400 : Color.gray400)};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 12px 20px;
  resize: none;
  border: none;
  outline: none;
  ${Font.regular14}
  box-sizing: border-box;
`;

const CharCount = styled.p<ErrorProps>`
  position: absolute;
  bottom: 8px;
  right: 12px;
  color: ${({ isError }) => (isError ? Color.red400 : Color.gray300)};
  ${Font.medium12}
`;
