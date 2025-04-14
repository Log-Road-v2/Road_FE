import { useWriteStore } from "../../stores/useWriteStore"
import MarkDownPreview from "./MarkDownPreview"
import * as S from "./style"
import TextArea from "../../components/Common/TextArea"

const Details = () => {
  const { info, setInfo } = useWriteStore()

  return (
    <S.InformationContainer>
      <S.TextBox>
        <S.SectionDetailText></S.SectionDetailText>
        <S.Required></S.Required>
      </S.TextBox>

      <S.Line />
      <TextArea
        value={info.description}
        height="1000px"
        onChange={(e) =>
          setInfo({
            ...info,
            description: e.target.value,
          })
        }
        placeholder="마크다운을 입력하세요"
      />
      <S.Line />

      <MarkDownPreview markdown={info.description}></MarkDownPreview>
    </S.InformationContainer >
  )
}

export default Details