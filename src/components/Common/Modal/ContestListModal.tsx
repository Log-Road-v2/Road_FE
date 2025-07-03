import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";
import { Arrow } from "../../../assets";
import { useState } from "react";

interface Contest {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
}

interface Props {
  contests: Contest[];
  selectedId: number | null;
  onSelect: (contest: Contest) => void;
}

export const ContestListModal = ({ contests, selectedId, onSelect }: Props) => {
  const groupedContests = contests.reduce<Record<string, Contest[]>>((acc, contest) => {
    const year = new Date(contest.startDate).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(contest);
    return acc;
  }, {});

  const [openYears, setOpenYears] = useState<Record<string, boolean>>({});

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  const handleContestClick = (contest: Contest) => {
    onSelect(contest);
  };

  return (
    <Container>
      <ListTitleWrap>프로젝트 목록</ListTitleWrap>

      {Object.entries(groupedContests).map(([year, contests]) => (
        <YearContestWrap key={year}>
          <YearWrap onClick={() => toggleYear(year)}>
            <YearText>{year}년</YearText>
            <Arrow color={Color.gray700} rotate={openYears[year] ? "bottom" : "top"} />
          </YearWrap>

          {openYears[year] && (
            <>
              {contests.map((contest) => (
                <ContestWrapper
                  key={contest.id}
                  onClick={() => handleContestClick(contest)}
                  backgroundColor={contest.id === selectedId}
                >
                  <Title backgroundColor={contest.id === selectedId}>
                    {contest.name}
                  </Title>
                </ContestWrapper>
              ))}
            </>
          )}
        </YearContestWrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${Color.white};
`;

const ContestWrapper = styled.div<{ backgroundColor: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 48px;
  background-color: ${({ backgroundColor }) => backgroundColor ? Color.blue100 : Color.white};
`;

const Title = styled.p<{ backgroundColor: boolean }>`
  ${Font.medium14}
  color: ${({ backgroundColor }) => backgroundColor ? Color.blue500 : Color.gray500};
`;

const ListTitleWrap = styled.div`
  padding: 16px 24px;
  ${Font.medium14};
  color: ${Color.gray700};
`;

const YearContestWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const YearWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid ${Color.gray200};
`;

const YearText = styled.p`
  ${Font.medium14};
  color: ${Color.gray700};
  margin: 0;
`;