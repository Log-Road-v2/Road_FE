import * as S from "./style";
import CommonTag from "../../components/Common/Tag/CommonTag";
import { ContestListModal } from "../../components/Common/Modal/ContestListModal";
import { useState } from "react";
import { Arrow } from "../../assets";
import { Ranking } from "../../components/Ranking";
import { useContestList } from "../../apis/contest";
import { Contest } from "../../interface";
import { getRank } from "../../apis/rank";
import { AuthorCategory } from "../../interface";

interface ProjectType {
  id: string,
  projectName: string,
  authCategory: AuthorCategory,
  introduction: string,
  image: string,
  award: string
}

export const RankingPage = () => {
  const { data: contestListData } = useContestList();
  const [selectedContest, setSelectedContest] = useState<Contest | null>(null);

  const { data: rankData } = getRank(selectedContest?.id);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelectContest = (contest: Contest) => {
    setSelectedContest(contest);
    setModalOpen(false);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.TitleBox>
          <S.Title onClick={() => setModalOpen(true)}>
            {selectedContest?.name || "대회 선택"}
            <Arrow size={36} />
          </S.Title>
          {modalOpen && (
            <S.ModalBackground onClick={() => setModalOpen(false)}>
              <div onClick={(e) => e.stopPropagation()}>
                <ContestListModal
                  contests={contestListData?.contests || []}
                  selectedId={selectedContest?.id ?? null}
                  onSelect={handleSelectContest}
                />
              </div>
            </S.ModalBackground>
          )}
        </S.TitleBox>
      </S.TitleWrapper>
      <S.ContestInfo>
        <S.ContestDate>
          <p>대회 일정</p>
          {new Date(rankData?.startDate).toLocaleDateString()} ~{" "}
          {new Date(rankData?.endDate).toLocaleDateString()}
        </S.ContestDate>
        <S.AwardList>
          상 목록
          <S.AwardWrapper>
            {rankData?.awards?.map((name: string, index: number) => (
              <CommonTag key={index} text={name} />
            ))}
          </S.AwardWrapper>
        </S.AwardList>
      </S.ContestInfo>
      {rankData?.projects?.map((project: ProjectType, index: number) => (
        <Ranking
          key={project.id}
          rankNum={index + 1}
          projectName={project.projectName}
          authCategory={project.authCategory}
          introduction={project.introduction}
          image={project.image}
          award={project.award}
        />
      ))}
    </S.Container>
  );
};
