import * as S from "./style"
import Input from "../../../components/Common/Input";
import { Color } from "../../../styles";
import { User, Add } from "../../../assets"
import ClosableTag from "../../../components/Common/Tag/ClosableTag";
import { useState } from "react"

const Student = () => {
  const [inputValue, setInputValue] = useState("")

  const handleSearch = () => { }

  return (
    <S.Container>
      <S.InputRow>
        <Input
          value={inputValue}
          placeholder="학번이나 이름을 입력해주세요"
          label=""
          error=""
          onChange={(e) => setInputValue(e.target.value)}
        />
        <S.AddButton onClick={handleSearch}>
          <Add color={Color.white} />
        </S.AddButton>
      </S.InputRow>

      <S.TagWrapper>
        <ClosableTag text="임다영" />
      </S.TagWrapper>

      {inputValue &&
        <S.SearchResult>
          <StudentResultItem name="임다영" studentId="3114" />
        </S.SearchResult>
      }
    </S.Container>
  )
}

const StudentResultItem = ({ name, studentId }: { name: string; studentId: string }) => (
  <S.StudentItem>
    <S.UserInfo>
      <User size={20} color={Color.gray500} />
      <S.NameId>
        <S.Name>{name}</S.Name>
        <S.StudentId>{studentId}</S.StudentId>
      </S.NameId>
    </S.UserInfo>
    <Add />
  </S.StudentItem>
);



export default Student
