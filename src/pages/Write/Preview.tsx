import * as S from "./style";
import { ReactNode, useEffect } from "react";
import SkillTag from "../../components/Common/Tag/CommonTag";
import { useWriteStore } from "../../stores/useWriteStore";
import MarkDownPreview from "./MarkDownPreview"
import { getProjectDetail } from "../../apis/project";
import { useParams } from "react-router-dom";
import { MemberType } from "../../interface";
import { StateTag } from "./component/StateTag";
import { ProjectState } from "./component/ProjectState";

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
  const { projectId } = useParams<{ projectId: string }>();

  const isValidId = !!projectId && !isNaN(Number(projectId));

  const { data: projectDetail } = getProjectDetail(projectId!, {
    enabled: isValidId
  });

  const data = projectDetail ?? info;

  useEffect(() => {
    console.log(projectDetail);
  })


  return (
    <S.PreviewContainer isPreview={!projectId}>
      <S.InformationContainer>
        <S.Title>{data.contestName}</S.Title>
        <S.OverviewSection>
          <S.TitleWrapper>
            <S.Title>{data.projectName}</S.Title>
            {projectId && data.isWriter && (<StateTag state={data?.state} />)}
          </S.TitleWrapper>
          {projectId && data.isWriter && (<ProjectState state={data.state} feedback={data?.feedback} />)}
          <S.ProjectInfo>
            {data.introduction}
          </S.ProjectInfo>

          {data?.image && <S.PreviewImage src={data.image} alt="프로젝트 이미지" />}
        </S.OverviewSection>

        <S.MetaInfoSection>
          <MetaItem title="프로젝트 유형">
            <S.TeamList>
              <S.MetaText>{data.authorCategory === "PERSONAL" ? "개인" : "팀"}</S.MetaText>
              <S.MetaText>{data.teamName}</S.MetaText>
            </S.TeamList>
          </MetaItem>

          {data?.member && data?.authorCategory == "TEAM" && (
            <MetaItem title="구성원">
              <S.TeamList>
                {data?.member?.map((value: MemberType) => (
                  <S.MetaText key={value.studentId}>{value.name}</S.MetaText>
                ))}
              </S.TeamList>
            </MetaItem>
          )}

          <MetaItem title="진행일자">
            <S.MetaText>{`${data.startDate} ~ ${data.endDate}`}</S.MetaText>
          </MetaItem>

          <MetaItem title="기술 스택">
            <S.TechStackList>
              {data.skills.map((value: string, index: number) => (
                <SkillTag key={index} text={value} />
              ))}
            </S.TechStackList>
          </MetaItem>
        </S.MetaInfoSection>

        <S.TitleWrapper>
          <S.Title>프로젝트 설명</S.Title>
        </S.TitleWrapper>

        <MarkDownPreview markdown={data.description} />

        {data?.video && (
          <S.VideoSection as="video" controls>
            <source src={data.video} type="video/mp4" />
          </S.VideoSection>
        )}
      </S.InformationContainer>
    </S.PreviewContainer >
  );
};

export default Preview;
