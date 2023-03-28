import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import ProfileUser from "./components/ProfileUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<SignUp />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/profile"} element={<ProfileUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
