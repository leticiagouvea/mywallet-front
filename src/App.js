import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import MainPage from "../src/pages/Wallet/MainPage";
import NewEntry from "./pages/Wallet/NewEntry";
import NewExit from "./pages/Wallet/NewExit";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
      <Routes>
          <Route path="/" element={<Login />} />
				  <Route path="/signup" element={<SignUp />}/>
          <Route path="/mainpage" element={<MainPage />}/>
          <Route path="/newentry" element={<NewEntry />}/>
          <Route path="/newexit" element={<NewExit />}/>
      </Routes>
    </BrowserRouter>
  );
}