import { useState, useEffect } from "react";
import { Arrow } from "../../assets";
import CommonTag from "../../components/Common/Tag/CommonTag";
import { ContestButton } from "../../components/Common/Button/ContestButton";
import * as S from "./style";
import { Pagination } from "../../components/Common/Pagination";
import { ContestListModal } from "../../components/Common/Modal/ContestListModal";
import { getVotedProjects, submitVote, getVotingCandidates } from "../../apis/vote";
import { useContestList } from "../../apis/contest";
import { Contest, Project as ProjectType } from "../../interface";
import { Project } from "../../components/Project";

export const VotePage = () => {
  const [selectedContest, setSelectedContest] = useState<Contest | null>(null);

  const { data: contestListData } = useContestList();

  const [modalOpen, setModalOpen] = useState(false);

  const handleSelectContest = (contest: Contest) => {
    setSelectedContest(contest);
    setModalOpen(false);
  };

  const [votes, setVotes] = useState<string[]>([]);
  const [awards, setAwards] = useState<{ name: string }[]>([]);
  const [currentProjects, setCurrentProjects] = useState<ProjectType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: candidatesData } = getVotingCandidates(selectedContest?.id ?? "");
  const { data: myVotesData } = getVotedProjects(selectedContest?.id ?? "");

  // 페이지네이션 및 데이터 설정
  useEffect(() => {
    if (candidatesData) {
      const projects = candidatesData.projects;
      const pageSize = 6;
      const total = Math.ceil(projects.length / pageSize);
      setTotalPages(total);

      const paged = projects.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      setCurrentProjects(paged);

      setAwards(candidatesData.awards);
    }
  }, [candidatesData, currentPage]);

  useEffect(() => {
    if (myVotesData) {
      const votedIds = myVotesData.project.map((v) => v.projectId);
      setVotes(votedIds);
    }
  }, [myVotesData]);

  const toggleVote = (id: string) => {
    if (votes.includes(id)) {
      setVotes(votes.filter((v) => v !== id));
    } else {
      if (votes.length < 3) {
        setVotes([...votes, id]);
      } else {
        alert("최대 3개까지만 선택할 수 있습니다.");
      }
    }
  };

  const voteMutation = submitVote(selectedContest?.id ?? "");
  
  const handleVoteClick = () => {
    const voteData = votes.map((projectId, index) => ({
      id: index + 1,
      projectId,
      rank: index + 1,
    }));

    voteMutation.mutate({ votes: voteData });
  };

  const isVoted = !!(myVotesData && myVotesData.project.length > 0);

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
        <ContestButton isVote={isVoted} onClick={handleVoteClick} />
      </S.TitleWrapper>
      <S.ContestInfo>
        <S.Date>
          <p>대회 일정</p>
          {selectedContest?.startDate} ~ {selectedContest?.endDate}
        </S.Date>
        <S.AwardList>
          상 목록
          <S.AwardWrapper>
            {awards.map((award, i) => (
              <CommonTag key={i} text={award.name} />
            ))}
          </S.AwardWrapper>
        </S.AwardList>
      </S.ContestInfo>
      <S.ProjectWrapper>
        {currentProjects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            projectName={project.projectName}
            introduction={project.introduction}
            authorCategory={project.authorCategory}
            image={project.image}
            isVoted={votes.includes(project.id)}
            isSelected={votes.includes(project.id)}
            onSelect={() => toggleVote(project.id)}
          />
        ))}
      </S.ProjectWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </S.Container>
  );
};
