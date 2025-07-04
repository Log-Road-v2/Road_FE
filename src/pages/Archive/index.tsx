import * as S from "./style"
import { Arrow } from "../../assets"
import Search from "../../components/Common/Search"
import NoPage from "../../components/Common/NoPage"
import { useContestList } from "../../apis/contest"
import { useState, useEffect } from "react"
import { ContestListModal } from "../../components/Common/Modal/ContestListModal"
import { Project } from "../../components/Project"
import { getAchieve, getSearchProject } from "../../apis/project"

interface Contest {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

const Archive = () => {
  const { data } = useContestList();

  const [selectedContest, setSelectedContest] = useState<Contest | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [keyword, setKeyword] = useState("");

  const { data: achieveData } = getAchieve(
    selectedContest?.id ? String(selectedContest.id) : "",
    offset
  );

  const { data: searchData } = getSearchProject(keyword, offset);

  useEffect(() => {
    if (data?.contests?.length) {
      const sorted = [...data.contests].sort(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
      setSelectedContest(sorted[0]);
    }
  }, [data]);

  const handleSelectContest = (contest: Contest) => {
    setSelectedContest(contest);
    setModalOpen(false);
    setOffset(0);
    setKeyword("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    setOffset(0);
  };

  const projectsToShow = keyword.length > 0 ? searchData?.projects : achieveData?.projects;

  return (
    <S.Container>
      <S.ArchiveHeader>
        <S.ContestNameDateWrapper>
          <S.SelectContest onClick={() => setModalOpen(true)}>
            <S.ContestName>{selectedContest?.name || "대회 선택"}</S.ContestName>
            <Arrow size={36} />
          </S.SelectContest>
          <S.Date>
            {selectedContest
              ? `${selectedContest.startDate} ~ ${selectedContest.endDate}`
              : ""}
          </S.Date>
        </S.ContestNameDateWrapper>
      </S.ArchiveHeader>

      <S.Content>
        <S.ProjectWrapper>
          <S.SearchWrapper>
            <S.SearchTotal>{`전체 ${projectsToShow?.length ?? 0}건`}</S.SearchTotal>
            <Search
              value={keyword}
              onChange={handleSearchChange}
              onSearch={handleSearch}
            />
          </S.SearchWrapper>

          <S.ProjectCardList>
            {projectsToShow && projectsToShow.length > 0 ? (
              projectsToShow.map((project: any) => (
                <Project
                  key={project.id}
                  id={project.id}
                  projectName={project.projectName}
                  introduction={project.introduction}
                  authorCategory={project.authorCategory}
                  image={project.image}
                  isVoted={false}
                  initialBookmarked={project.isMark}
                />
              ))
            ) : (
              <NoPage />
            )}
          </S.ProjectCardList>

        </S.ProjectWrapper>
      </S.Content>

      {modalOpen && (
        <S.ModalBackground onClick={() => setModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <ContestListModal
              contests={data.contests}
              selectedId={selectedContest?.id ?? null}
              onSelect={handleSelectContest}
            />
          </div>
        </S.ModalBackground>
      )}
    </S.Container>
  )
}

export default Archive