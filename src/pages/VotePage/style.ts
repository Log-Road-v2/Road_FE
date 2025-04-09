import styled from "@emotion/styled";
import { Color, Font } from "../../styles";

export const Container = styled.div`
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.p`
  font: ${Font.bold32};
  color: ${Color.gray800};
`;

export const TitleWrapper = styled.div`
  width: 1180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ContestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 0 32px;
  width: 1180px;
  height: 146px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(179, 180, 184, 0.2);
`;

export const Date = styled.div`
  > p {
    font: ${Font.medium16};
    color: ${Color.black};
  }
  font: ${Font.medium16};
  color: ${Color.gray500};
  display: flex;
  align-items: center;
  gap: 5%;
`;

export const AwardList = styled.div`
  display: flex;
  align-items: center;
  gap: 6%;
  font: ${Font.medium16};
  color: ${Color.black};
`;

export const AwardWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 17px;
  justify-content: flex-start;
  width: 100%;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 32px 0;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  font: ${Font.medium16};
  background-color: ${({ isActive }) =>
    isActive ? Color.blue800 : Color.white};
  color: ${({ isActive }) => (isActive ? Color.gray200 : Color.gray600)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${Color.gray200};
    color: ${Color.gray600};
  }
`;
