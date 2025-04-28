import styled from "@emotion/styled";
import { Font, Color } from "../../styles";

export const Container = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 120px 0;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const UserName = styled.p`
  ${Font.bold32}
`

export const Institution = styled.p`
  color: ${Color.gray500};
`

export const Email = styled.p`
  color: ${Color.gray300};
`

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
`

export const TabContent = styled.div<{
  selected?: boolean
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 36px;
  padding: 36px 48px;
  background-color: ${({ selected }) => selected ? Color.gray800 : Color.gray900};
  border: ${({ selected }) => selected ? `none` : `1px solid ${Color.gray700}`};
`

export const TabInfo = styled.p`
  width: 100%;
  ${Font.regular16}
  color: ${Color.white};
`

export const IconCountWrapper = styled.div`
  display: flex;
  gap: 12px;
`

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border: 1px solid ${Color.white};
  background-color: ${Color.gray700};
`

export const Count = styled.p`
  ${Font.medium24}
  color: ${Color.white};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProjectWrapper = styled.div``

export const Total = styled.p``

export const ProjectCardList = styled.div``

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 2px solid ${Color.gray500};
  border-bottom: 1px solid ${Color.gray300};
`

export const SearchTotal = styled.p`
  ${Font.medium14}
  color: ${Color.gray500};
`

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const Tag = styled.span<{
  selected?: boolean
}>`
  padding: 4px 24px;
  border-radius: 20px;
  border: ${({ selected }) => selected ? `none` : `1px solid ${Color.gray300}`};
  background-color: ${({ selected }) => selected ? Color.gray800 : Color.white};
  color: ${({ selected }) => selected ? Color.gray200 : Color.gray300};
  cursor: pointer;
  ${Font.medium14}
`