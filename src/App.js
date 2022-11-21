import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import MainPage from "../src/pages/Wallet/MainPage";
import NewInput from "./pages/Wallet/NewInput";
import NewOutput from "./pages/Wallet/NewOutput";
import PrivatePage from "./components/PrivatePage";
import UserContext from "../src/context/UserContext";
import { useState } from "react";

export default function App() {
  const [cash, setCash] = useState("");
  const [text, setText] = useState("");

  return (
    <BrowserRouter>
        <GlobalStyle />
        <UserContext.Provider value={{cash, setCash, text, setText}}>
      <Routes>
          <Route path="/" element={<Login />} />
				  <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/wallet" element={<PrivatePage><MainPage /></PrivatePage>}/>
          <Route path="/new-input" element={<PrivatePage><NewInput /></PrivatePage>}/>
          <Route path="/new-output" element={<PrivatePage><NewOutput /></PrivatePage>}/>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}