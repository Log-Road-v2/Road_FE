import styled from "@emotion/styled";
import { Font, Color } from "../../styles";

export const Container = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 120px 0;
`

export const ArchiveHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ContestNameDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SelectContest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
`

export const ContestName = styled.p`
  ${Font.bold32}
`

export const Date = styled.p`
  color: ${Color.gray500};
`

export const Description = styled.p`
  color: ${Color.gray300};
`

export const Content = styled.div``

export const ProjectWrapper = styled.div``

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  border-top: 2px solid ${Color.gray500};
  border-bottom: 1px solid ${Color.gray300};
`

export const SearchTotal = styled.p``

export const ProjectCardList = styled.div``

export const ProjectCard = styled.div``