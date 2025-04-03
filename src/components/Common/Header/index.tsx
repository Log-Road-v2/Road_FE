import styled from '@emotion/styled'
import { Logo } from '../../../assets'
import Navigation from './Navigation'
import LoginNav from './LoginNav'
import { Color } from '../../../styles'

const Header = () => {

  return (
    <Container>
      <DesktopContainer width={58}>
        <Logo />

        <Navigation />

        <LoginNav />
      </DesktopContainer>
    </Container>
  )
}

const Container = styled.header`
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Color.gray200};
`

const DesktopContainer = styled.div<{
  width?: number
}>`
  width: ${({ width }) => `${width ?? 10}vw`};
  display: flex;
  align-items: center;
  gap: 72px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default Header