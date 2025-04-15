import * as S from "./style"
import { Arrow } from "../../assets"
import Search from "../../components/Common/Search"
import NoPage from "../../components/Common/NoPage"

const Archive = () => {
  return (
    <S.Container>
      <S.ArchiveHeader>
        <S.ContestNameDateWrapper>
          <S.SelectContest>
            <S.ContestName>2024년 교내 해커톤</S.ContestName>
            <Arrow size={36} />
          </S.SelectContest>
          <S.Date>2024년 5월 12일 ~ 2024년 6월 12일</S.Date>
        </S.ContestNameDateWrapper>
        <S.Description>이 대회는 창의적인 인재를 융합하고 인간성 있는 사람을 만들고 뭐시기 창의적이고 뭐시기 저시기 대회 설명</S.Description>
      </S.ArchiveHeader>

      <S.Content>
        <S.ProjectWrapper>
          <S.SearchWrapper>
            <S.SearchTotal>전체 10건</S.SearchTotal>
            <Search
              value=""
              onChange={() => { }}
              onSearch={() => { }}
            />
          </S.SearchWrapper>

          <S.ProjectCardList>
            {/* <S.ProjectCard></S.ProjectCard> */}
            <NoPage />
          </S.ProjectCardList>

        </S.ProjectWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Archive