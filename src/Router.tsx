import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Layout from "./components/Common/Layout";
import Main from "./pages/Main";
import { VotePage } from "./pages/VotePage";
import Write from "./pages/Write";
import Archive from "./pages/Archive";
import { Role } from "./pages/Auth/Signup/Role";
import { Studentnumber } from "./pages/Auth/Signup/StudentNumber";
import { Info } from "./pages/Auth/Signup/Info";
import { PasswordChange } from "./pages/Auth/PasswordChange";
import { LoginPage } from "./pages/Auth/Login";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/Vote" element={<VotePage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
        <Route path="/signup/role" element={<Role />} />
        <Route path="/signup/studentnumber" element={<Studentnumber />} />
        <Route path="/signup/info" element={<Info />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
