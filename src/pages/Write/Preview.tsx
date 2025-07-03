import * as S from "./style";
import { ReactNode, useEffect, useState } from "react";
import SkillTag from "../../components/Common/Tag/CommonTag";
import { useWriteStore } from "../../stores/useWriteStore";
import MarkDownPreview from "./MarkDownPreview"
import { getProjectDetail } from "../../apis/project";
import { useParams } from "react-router-dom";
import { MemberType } from "../../interface";

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
  const { projectId } = useParams();

  const projectIdNum = Number(projectId);
  const isValidId = !isNaN(projectIdNum);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const { data: projectDetail } = getProjectDetail(projectIdNum, {
    enabled: isValidId
  });

  const data = projectDetail ?? info;

  useEffect(() => {
    if (data.image instanceof File) {
      const imageUrl = URL.createObjectURL(data.image);
      setImagePreview(imageUrl);
      return () => URL.revokeObjectURL(imageUrl);
    } else if (typeof data.image === "string") {
      setImagePreview(data.image);
    }

    if (data.video instanceof File) {
      const videoUrl = URL.createObjectURL(data.video);
      setVideoPreview(videoUrl);
      return () => URL.revokeObjectURL(videoUrl);
    } else if (typeof data.video === "string") {
      setVideoPreview(data.video);
    }
    console.log("video:", data.video);
  }, [data.image, data.video]);

  return (
    <S.PreviewContainer isPreview={!projectId}>
      <S.InformationContainer>
        <S.Title>{data.contestName}</S.Title>
        <S.OverviewSection>
          <S.TitleWrapper>
            <S.Title>{data.projectName}</S.Title>
          </S.TitleWrapper>
          <S.ProjectInfo>
            {data.introduction}
          </S.ProjectInfo>

          {imagePreview && <S.PreviewImage src={imagePreview} alt="프로젝트 이미지" />}
        </S.OverviewSection>

        <S.MetaInfoSection>
          <MetaItem title="프로젝트 유형">
            <S.TeamList>
              <S.MetaText>{data.authorCategory === "PERSONAL" ? "개인" : "팀"}</S.MetaText>
              <S.MetaText>{data.teamName}</S.MetaText>
            </S.TeamList>
          </MetaItem>

          {data?.member && (
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

        {videoPreview && (
          <S.VideoSection as="video" controls>
            <source src={videoPreview} type="video/mp4" />
          </S.VideoSection>
        )}
      </S.InformationContainer>
    </S.PreviewContainer>
  );
};

export default Preview;
