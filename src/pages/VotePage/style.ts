import styled from "@emotion/styled";
import { Color, Font } from "../../styles";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 16px;
`;

export const Title = styled.p`
  ${Font.bold32};
  color: ${Color.gray800};
  cursor: pointer;
`;

export const TitleBox = styled.div`
  position: relative;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  margin-top: 8px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
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
  width: 100%;
  max-width: 1180px;
  height: 146px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(179, 180, 184, 0.2);
`;

export const Date = styled.div`
  > p {
    ${Font.medium16};
    color: ${Color.black};
  }
  ${Font.medium16};
  color: ${Color.gray500};
  display: flex;
  align-items: center;
  gap: 5%;
`;

export const AwardList = styled.div`
  display: flex;
  align-items: center;
  gap: 6%;
  ${Font.medium16};
  color: ${Color.black};
`;

export const AwardWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 15px;
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
  ${Font.medium16};
  background-color: ${({ isActive }) =>
    isActive ? Color.blue800 : Color.white};
  color: ${({ isActive }) => (isActive ? Color.gray200 : Color.gray600)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${Color.gray200};
    color: ${Color.gray600};
  }

  &:focus-visible {
    outline: 2px solid ${Color.blue500};
    outline-offset: 2px;
  }
`;
