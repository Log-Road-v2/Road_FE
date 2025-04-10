import * as S from "./style"
import TextArea from "../../components/Common/TextArea"

const Details = () => {
  return (
    <S.InformationContainer>
      <S.TextBox>
        <S.SectionDetailText></S.SectionDetailText>
        <S.Required></S.Required>
      </S.TextBox>

      <S.Line />
      {/* <TextArea /> */}
      <S.Line />
    </S.InformationContainer>
  )
}

export default Details