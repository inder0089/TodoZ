import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Todo from "./component/todo/Todo";
import Login from "./component/Login";
import Register from "./component/Register";
import { useEffect, useState } from "react";
import Home from "./component/Home";
import TodoCopy from "./component/todo/TodoCopy";
import Timer from "./component/Timer";
import Counter from "./component/Counter";
import StopTimer from "./component/StopTimer";

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
        <Route path="timer" element={<Timer />} />
        <Route path="count" element={<Counter />} />
        <Route path="stopwatch" element={<StopTimer />} />
      </Routes>
    </>
  );
}

export default App;
