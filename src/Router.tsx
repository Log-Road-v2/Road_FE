import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Layout from "./components/Common/Layout";
import Main from "./pages/Main";
import Write from "./pages/Write"
import Archive from "./pages/Archive";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router