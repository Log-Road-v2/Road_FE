import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Layout from "./components/Common/Layout";
import Main from "./pages/Main";
import { VotePage } from "./pages/VotePage";
import Write from "./pages/Write";
import Archive from "./pages/Archive";
import { RankingPage } from "./pages/Ranking";
function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
