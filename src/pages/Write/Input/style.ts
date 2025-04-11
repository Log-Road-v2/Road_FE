import styled from "@emotion/styled";
import { Color, Font } from "../../../styles";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`

export const InputRow = styled.div`
  display: flex;
  gap: 12px;
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${Color.gray800};
  border: none;
  cursor: pointer;
`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const SearchResult = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  background-color: ${Color.white};
  box-shadow: 0 4px 12px rgba(27, 116, 198, 0.1);
  border-radius: 8px;
  z-index: 10;
`;

export const StudentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 24px;
`;

export const NameId = styled.div`
  display: flex;
  gap: 8px;
`;

export const Name = styled.p`
  ${Font.medium14}
`

export const StudentId = styled.p`
  color: ${Color.gray500};
  ${Font.regular14}
`
