import styled from '@emotion/styled'
import { Color, Font } from '../../styles'

// 메인 스타일

export const Container = styled.div``

export const DisplayWrapper = styled.main`
  display: flex;

`

export const Section = styled.section``

export const SectionHeadLine = styled.p``

export const IntroductionWrapper = styled.div``

export const Title = styled.p``

export const SubTitle = styled.p``

export const ActionWrapper = styled.div``

export const TextWrapper = styled.div``

export const ActionHeadLine = styled.p``

export const AccessMassageWrapper = styled.nav``

// 슬라이드 스타일

export const SlideContainer = styled.div<{
  backgroundImage: string
}>`
  width: 780px;
  height: 420px;
  padding: 52px 36px;
  border-radius: 32px;
  background-color: ${Color.gray500};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
`

export const SlideContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const ImageTitle = styled.h1`
  text-align: center;
  white-space: pre-line;
  color: ${Color.white};
  ${Font.medium32}
`

export const ImageSubTitle = styled.h6`
  color: ${Color.gray300};
  ${Font.regular14}
`

export const SlideNavigation = styled.div`
  display: flex;
  gap: 12px;
`

export const PageDisplay = styled.p`
  white-space: pre;
  color: ${Color.gray200};
  ${Font.medium12}
`

export const PaginationController = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  gap: 12px;
  border-radius: 20px;
  background-color: ${Color.gray800};
`


