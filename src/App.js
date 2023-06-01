import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./component/todo/Todo";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
