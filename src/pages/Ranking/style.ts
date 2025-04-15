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
