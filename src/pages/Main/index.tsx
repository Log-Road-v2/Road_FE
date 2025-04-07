import * as S from "./style"
import SlideImage from "./SlideImage"
import GuideCard from "../../components/Main/GuideCard"
import Navigation from "../../components/Main/Navigation"
import AccessMessage from "../../components/Main/AccessMessage"

const Main = () => {
  return (
    <S.Container>
      <S.DisplayWrapper>
        <SlideImage />

        <S.Section>
          <S.SectionHeadLine>프로젝트 관리부터 투표까지</S.SectionHeadLine>
          <div>
            <S.SectionTitle>DSM 프로젝트 통합 플랫폼</S.SectionTitle>
            <S.SubTitle>모든 프로젝트를 한눈에 확인하자</S.SubTitle>
          </div>

          <Navigation />
          <GuideCard />
        </S.Section>

      </S.DisplayWrapper>

      <S.ActionWrapper>
        <S.TextWrapper>
          <S.ActionHeadLine>분산된 프로젝트를 로드를 통해 모으고 통합해보자</S.ActionHeadLine>
          <S.Title>DSM 프로젝트 통합 플랫폼<br />모든 프로젝트를 한 눈에 확인하자</S.Title>
        </S.TextWrapper>

        <AccessMessage />
      </S.ActionWrapper>
    </S.Container>
  )
}

export default Main