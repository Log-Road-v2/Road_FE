import { useState } from "react";
import * as S from "./style";
import { StudentTabData, TeacherTabData } from "./data";
import NoPage from "../../components/Common/NoPage";

type Role = "STUDENT" | "TEACHER";

const DEFAULT_ROLE: Role = "STUDENT";
const PROJECT_STATES = ["전체", "대기", "승인", "반려", "수정", "임시저장"];
const FILTER_TAB_ID = 2;

const MyPage = () => {
  const tabData = DEFAULT_ROLE === "TEACHER" ? TeacherTabData : StudentTabData;

  const [selectedState, setSelectedState] = useState<string>("전체");
  const [selectedTabId, setSelectedTabId] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setSelectedTabId(tabId);
  };

  const renderUserInfo = () => (
    <S.UserInfoWrapper>
      <S.UserName>임다영</S.UserName>
      <S.Institution>대덕소프트웨어마이스터고등학교 3학년 1반 14번</S.Institution>
      <S.Email>limda00@dsm.hs.kr</S.Email>
    </S.UserInfoWrapper>
  );

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

  return (
    <S.Container>
      {renderUserInfo()}
      {renderTabs()}

      <S.Content>
        <S.ProjectWrapper>
          <S.SearchWrapper>
            <S.SearchTotal>전체 10건</S.SearchTotal>
            {selectedTabId === FILTER_TAB_ID && renderStateTags()}
          </S.SearchWrapper>

          <S.ProjectCardList>
            <NoPage />
          </S.ProjectCardList>
        </S.ProjectWrapper>
      </S.Content>
    </S.Container>
  );
};

export default MyPage;
