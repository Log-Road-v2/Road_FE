import { useState } from "react"
import * as S from "./style"
import { Play, Move } from "../../assets"
import { Color } from "../../styles"
import { SlideImageData } from "../../components/Main/Data/NavigationData"

const SlideImage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? SlideImageData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === SlideImageData.length - 1 ? 0 : prev + 1));
  };

  return (
    <S.SlideContainer backgroundImage={SlideImageData[currentPage].image}>
      <S.SlideContent>
        <S.ImageTitle>{SlideImageData[currentPage].title}</S.ImageTitle>
        <S.ImageSubTitle>{SlideImageData[currentPage].subTitle}</S.ImageSubTitle>
      </S.SlideContent>

      <S.SlideNavigation>
        <S.PageDisplay>{`${currentPage + 1} / ${SlideImageData.length}`}</S.PageDisplay>

        <S.PaginationController>
          <Move size={12} color={Color.gray200} rotate="left" onClick={handlePrev} />
          <Play size={12} color={Color.gray200} />
          <Move size={12} color={Color.gray200} rotate="right" onClick={handleNext} />
        </S.PaginationController>
      </S.SlideNavigation>

    </S.SlideContainer>
  )
}

export default SlideImage