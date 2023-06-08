import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Todo from "./component/todo/Todo";
import Login from "./component/Login";
import Register from "./component/Register";
import { useEffect, useState } from "react";
import Home from "./component/Home";
import TodoCopy from "./component/todo/TodoCopy";

function App() {
  // const [isToken, setIstoken] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("auth"));
    console.log("loginTokan", loginToken);
    if (loginToken?.access_token) {
      navigate("/login");
      // setIstoken(false);
    } else {
      // setIstoken(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="copy" element={<TodoCopy />} />
      </Routes>
    </>
  );
}

export default App;
