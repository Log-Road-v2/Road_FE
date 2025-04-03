import styled from "@emotion/styled"
import { NavigationListData } from "../Data/LayoutData"
import { Font, Color } from "../../../styles"
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <NavList>
      {NavigationListData.map((linkData) =>
        (linkData.login) && (
          <li key={linkData.id}>
            <NavArticle
              articleHref={linkData.href}
              pathname={location.pathname}
            >
              {linkData.name}
            </NavArticle>
          </li>
        )
      )}
    </NavList>
  )
}

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const NavArticle = styled.div<{
  articleHref: string,
  pathname: string
}>`
  color: ${({ articleHref, pathname }) => articleHref === pathname ? Color.gray700 : Color.gray300};
  text-decoration: none;
  cursor: pointer;
  ${Font.semi16}
`

export default Navigation