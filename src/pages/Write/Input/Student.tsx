import styled from "@emotion/styled";
import Input from "../../../components/Common/Input";
import { Color, Font } from "../../../styles";
import { User, Add } from "../../../assets"
import ClosableTag from "../../../components/Common/Tag/ClosableTag";
import { useState } from "react"

const Student = () => {
  const [inputValue, setInputValue] = useState("")

  const handleSearch = () => { }

  return (
    <Container>
      <InputRow>
        <Input
          value={inputValue}
          placeholder="학번이나 이름을 입력해주세요"
          label=""
          error=""
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AddButton onClick={handleSearch}>
          <Add color={Color.white} />
        </AddButton>
      </InputRow>

      <TagWrapper>
        <ClosableTag text="임다영" />
      </TagWrapper>

      {inputValue &&
        <SearchResult>
          <StudentResultItem name="임다영" studentId="3114" />
        </SearchResult>
      }
    </Container>
  )
}

const StudentResultItem = ({ name, studentId }: { name: string; studentId: string }) => (
  <StudentItem>
    <UserInfo>
      <User size={20} color={Color.gray500} />
      <NameId>
        <Name>{name}</Name>
        <StudentId>{studentId}</StudentId>
      </NameId>
    </UserInfo>
    <Add />
  </StudentItem>
);

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
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

const SearchResult = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  background-color: ${Color.white};
  box-shadow: 0 4px 12px rgba(27, 116, 198, 0.1);
  border-radius: 8px;
  z-index: 10;
`;

const StudentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 24px;
`;

const NameId = styled.div`
  display: flex;
  gap: 8px;
`;

const Name = styled.p`
  ${Font.medium14}
`

const StudentId = styled.p`
  color: ${Color.gray500};
  ${Font.regular14}
`


export default Student
