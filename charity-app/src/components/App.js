import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import UserLogin from "./UserLogin/UserLogin";
import UserLogout from "./UserLogout/UserLogout";
import UserRegister from "./UserRegister/UserRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/register" element={<UserRegister />}></Route>
        <Route path="/logout" element={<UserLogout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
