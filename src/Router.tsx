import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Layout from "./components/Common/Layout";
import Main from "./pages/Main";
import { VotePage } from "./pages/VotePage";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/Vote" element={<VotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
