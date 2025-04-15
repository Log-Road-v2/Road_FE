import * as S from "./style";
import { ReactNode } from "react";
import SkillTag from "../../components/Common/Tag/CommonTag";
import { useWriteStore } from "../../stores/useWriteStore";
import MarkDownPreview from "./MarkDownPreview"

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
  const { info } = useWriteStore();

  return (
    <S.InformationContainer>
      <S.OverviewSection>
        <S.TitleWrapper>
          <S.Title>{info.projectName}</S.Title>
        </S.TitleWrapper>
        <S.ProjectInfo>
          {info.introduction}
        </S.ProjectInfo>
        <S.PreviewImage />
      </S.OverviewSection>

      <S.MetaInfoSection>
        <MetaItem title="프로젝트 유형">
          <S.TeamList>
            <S.MetaText>{info.authorCategory}</S.MetaText>
            <S.MetaText>{info.teamName}</S.MetaText>
          </S.TeamList>
        </MetaItem>

        <MetaItem title="구성원">
          <S.TeamList>
            {info.members.map((value, index) => (
              <S.MetaText key={index}>{value.studentId}</S.MetaText>
            ))}
          </S.TeamList>
        </MetaItem>

        <MetaItem title="진행일자">
          <S.MetaText>{`${info.startDate} ~ ${info.endDate}`}</S.MetaText>
        </MetaItem>

        <MetaItem title="기술 스택">
          <S.TechStackList>
            {/* {info.skills.map((value, index) => (
              <SkillTag key={index} text={value} />
            ))} */}
          </S.TechStackList>
        </MetaItem>
      </S.MetaInfoSection>

      <S.TitleWrapper>
        <S.Title>프로젝트 설명</S.Title>
      </S.TitleWrapper>

      <MarkDownPreview markdown={info.description} />

      <S.VideoSection></S.VideoSection>
    </S.InformationContainer>
  );
};

export default Preview;
