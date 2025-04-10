import styled from "@emotion/styled";
import Input from "../../../components/Common/Input";
import { Color, Font } from "../../../styles";
import ClosableTag from "../../../components/Common/Tag/ClosableTag";
import { useState } from "react";
import { Add } from "../../../assets";

const Skill = () => {
  const [inputValue, setInputValue] = useState("")

  const handleRegister = () => { }

  return (
    <Container>
      <InputRow>
        <Input
          value={inputValue}
          placeholder="기술스택을 입력해주세요"
          label=""
          error=""
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AddButton onClick={handleRegister}>
          <Add color={Color.white} />
        </AddButton>
      </InputRow>

      <TagWrapper>
        <ClosableTag text="기술" />
      </TagWrapper>

    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const InputRow = styled.div`
  display: flex;
  gap: 12px;
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${Color.gray800};
  border: none;
  cursor: pointer;
`

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export default Skill
