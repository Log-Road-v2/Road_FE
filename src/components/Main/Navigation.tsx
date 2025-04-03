import styled from "@emotion/styled";
import { NavigationListData } from "../Main/Data/NavigationData";
import { Font, Color } from "../../styles"

const Navigation = () => {

  return (
    <NavList>
      {NavigationListData.map(({ id, icon, title }) => (
        <NavArticle key={id}>
          <IconWrapper>{icon}</IconWrapper>
          <LinkText>{title}</LinkText>
        </NavArticle>
      ))}
    </NavList>
  )
}

const NavList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const NavArticle = styled.div`
  width: 82px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
  border-radius: 16px;
  transition: background-color 0.2s, color 0.3s;

  :hover {
    background-color: ${Color.blue100};
    
    p {
      color: ${Color.blue300};
    }

    svg {
      fill: ${Color.blue300};
    }
  } 
`

const LinkText = styled.p`
  color: ${Color.gray500};
  ${Font.medium14}
`

const IconWrapper = styled.div`
  svg {
    fill: ${Color.blue200};
    transition: fill 0.3s, stroke 0.3s;
  }
`;

export default Navigation;