import { useState } from "react";
import * as S from "./style";
import NoPage from "../../components/Common/NoPage";
import { useGetUserInfo, useJoinedProject, useBookmarkedProject, useWrittenProject } from "../../apis/user";
import { StudentTabData, TeacherTabData } from "./data";
import { getUserProject } from "../../interface";
import { Project } from "../../components/Project"

const PROJECT_STATES = ["전체", "대기", "승인", "반려", "수정", "임시저장"];

const MyPage = () => {
  const { data: userInfo, isLoading: isUserLoading, isError: isUserError } = useGetUserInfo();

  const [selectedState, setSelectedState] = useState<string>("전체");
  const [selectedTabId, setSelectedTabId] = useState<number>(1);

  const { data: joinedProjects } = useJoinedProject({ enabled: userInfo.role === "STUDENT" && selectedTabId === 1 });
  const { data: writtenProjects } = useWrittenProject({ enabled: userInfo.role === "STUDENT" && selectedTabId === 2 });
  const { data: bookmarkedProjects } = useBookmarkedProject({ enabled: (userInfo.role === "STUDENT" && selectedTabId === 3) || (userInfo.role === "TEACHER" && selectedTabId === 1) });

  const role = userInfo?.role || "STUDENT";
  const tabData = role === "TEACHER" ? TeacherTabData : StudentTabData;

  const handleTabClick = (tabId: number) => {
    setSelectedTabId(tabId);
  };

  const renderUserInfo = () => {
    if (!userInfo || isUserLoading || isUserError) return null;

    const { name, grade, classNumber, studentNumber, email, school } = userInfo;

    return (
      <S.UserInfoWrapper>
        <S.UserName>{name}</S.UserName>
        <S.Institution>
          대덕소프트웨어마이스터고등학교 {school} {grade}학년 {classNumber}반 {studentNumber}번
        </S.Institution>
        <S.Email>{email}</S.Email>
      </S.UserInfoWrapper>
    );
  };

  const renderTabs = () => (
    <S.TabWrapper>
      {tabData.map((tab) => (
        <S.TabContent
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          selected={tab.id === selectedTabId}
        >
          <S.TabInfo>{tab.name}</S.TabInfo>
          <S.IconCountWrapper>
            <S.IconWrapper>{tab.icon}</S.IconWrapper>
            <S.Count>{tab.count}</S.Count>
          </S.IconCountWrapper>
        </S.TabContent>
      ))}
    </S.TabWrapper>
  );

  const renderStateTags = () => (
    <S.TagWrapper>
      {PROJECT_STATES.map((state, index) => (
        <S.Tag
          key={index}
          selected={state === selectedState}
          onClick={() => setSelectedState(state)}
        >
          {state}
        </S.Tag>
      ))}
    </S.TagWrapper>
  );

  const getSelectedProjects = () => {
    if (role === "STUDENT") {
      if (selectedTabId === 1) return joinedProjects ?? { projects: [] };
      if (selectedTabId === 2) return writtenProjects ?? { projects: [] };
      if (selectedTabId === 3) return bookmarkedProjects ?? { projects: [] };
    } else if (role === "TEACHER") {
      if (selectedTabId === 1) return bookmarkedProjects ?? { projects: [] };
    }
    return { projects: [] };
  };

  const selectedProjects = getSelectedProjects();

  return (
    <S.Container>
      {renderUserInfo()}
      {renderTabs()}
      <S.Content>
        <S.ProjectWrapper>
          <S.SearchWrapper>
            <S.SearchTotal>전체 {selectedProjects.projects.length}건</S.SearchTotal>
            {selectedTabId === 2 ? renderStateTags() : null}
          </S.SearchWrapper>

          <S.ProjectCardList>
            {selectedProjects.length === 0 ? (
              <NoPage />
            ) : (
              selectedProjects.projects.map((project: getUserProject) => (
                <Project
                  id={project.id}
                  projectName={project.projectName}
                  introduction={project.introduction}
                  authorCategory={project.authorCategory}
                  image={project.image}
                  isVoted={false}
                  initialBookmarked={selectedTabId === 3 ? true : false}
                />
              ))
            )}
          </S.ProjectCardList>
        </S.ProjectWrapper>
      </S.Content>
    </S.Container>
  );
};

export default MyPage;
