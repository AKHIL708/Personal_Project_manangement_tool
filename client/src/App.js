import "./App.css";
import { Route, Routes } from "react-router";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import UploadData from "./Components/UploadData";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/uploadData" element={<UploadData />} />
      </Routes>
    </>
  );
}

export default App;
