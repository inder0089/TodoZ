import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const initialValue = {
    inputTask: "",
    id: "",
  };

  const [todoData, setTodoData] = useState(initialValue);
  const [todoList, setTodoList] = useState([]);
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setTodoData({ ...todoData, id: Date.now(), [name]: value });
  };

  const addTodoItem = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todoData]);
    setTodoData(initialValue);
  };
  return (
    <>
      <button className="btn btn-danger" onClick={logoutUser}>
        Logout
      </button>
      <div className="todo-body">
        <div className="app-container" id="taskList">
          <form onSubmit={addTodoItem}>
            <div className="d-flex justify-content-between">
              <h1 className="app-header">TO DO LIST</h1>
              <select name="fiter" id="filter" className="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not completed</option>
              </select>
            </div>
            <div className="add-task">
              <input
                type="text"
                autoComplete="off"
                placeholder="Add New Task"
                className="task-input"
                name="inputTask"
                value={todoData.inputTask}
                onChange={handleInputField}
              />
              <button type="submit" className="submit-task" title="Add Task" />
            </div>
          </form>
          <ul className="task-list p-0 py-3">
            {todoList.map((name, index) => {
              {
                /* console.log("name", name); */
              }
              return (
                <>
                  <li
                    key={index.id}
                    className="task-list-item"
                    v-for="task in tasks"
                  >
                    <label className="task-list-item-label">
                      <input type="checkbox" />
                      <span>{name.inputTask}</span>
                    </label>
                    <span className="delete-btn" title="Delete Task"></span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
