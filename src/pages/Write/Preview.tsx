import * as S from "./style";
import { ReactNode } from "react";
import SkillTag from "../../components/Common/Tag/CommonTag";

interface PropsType {
  title?: string;
  children?: ReactNode
}

const MetaItem = ({ title, children }: PropsType) => (
  <S.MetaItem>
    <S.MetaTitle>{title}</S.MetaTitle>
    {children}
  </S.MetaItem>
);

const Preview = () => {
  return (
    <S.InformationContainer>
      <S.OverviewSection>
        <S.TitleWrapper>
          <S.Title>프로젝트명</S.Title>
        </S.TitleWrapper>
        <S.ProjectInfo>
          로드는 학교의 프로젝트를 저장하고 투표 기능을 제공하는 서비스입니다. 대마고 유일한 플랫폼 야호 로드는 학교의 프로젝트를 저장하고 투표 기능을 제공하는 서비스입니다. 대마고 유일한 플랫폼 야호 서비스입니다. 대마고 유일한 플랫폼 야호
        </S.ProjectInfo>
        <S.PreviewImage />
      </S.OverviewSection>

      <S.MetaInfoSection>
        <MetaItem title="프로젝트 유형">
          <S.TeamList>
            <S.MetaText>동아리</S.MetaText>
            <S.MetaText>Log</S.MetaText>
          </S.TeamList>
        </MetaItem>

        <MetaItem title="구성원">
          <S.TeamList>
            <S.MetaText>임다영</S.MetaText>
          </S.TeamList>
        </MetaItem>

        <MetaItem title="진행일자">
          <S.MetaText>2024년 5월 12일 ~ 2024년 5월 24일</S.MetaText>
        </MetaItem>

        <MetaItem title="기술 스택">
          <S.TechStackList>
            {/* <SkillTag /> */}
          </S.TechStackList>
        </MetaItem>
      </S.MetaInfoSection>

      <S.TitleWrapper>
        <S.Title>프로젝트 설명</S.Title>
      </S.TitleWrapper>

      <S.ProjectDetails></S.ProjectDetails>

      <S.VideoSection></S.VideoSection>
    </S.InformationContainer>
  );
};

export default Preview;
