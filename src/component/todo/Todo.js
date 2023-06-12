import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Dynamic id library

const Todo = () => {
  // navigate
  const navigate = useNavigate();

  // logout
  const logoutUser = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // step-1
  const initialValue = {
    inputTask: "",
    id: "",
    isCompleted: false,
  };

  // step-2
  const [todoData, setTodoData] = useState(initialValue);
  const [todoList, setTodoList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  };

  // step-3

  const addTodoItem = (e) => {
    e.preventDefault();
    // setTodoList([...todoList, { ...todoData, id: uuidv4() }]);
    setTodoList([...todoList, { ...todoData, id: Date.now() }]);
    setTodoData(initialValue);
    // console.log("todoList", todoList);
  };

  //   console.log("todoList", todoList);
  // step-4
  // Delete
  const deleteItem = (iD) => {
    const _todoListupdated = todoList.filter((item) => {
      return item.id !== iD;
    });
    setTodoList(_todoListupdated);
  };

  // step-5
  // checkbox
  const handleCheckBox = (e, id) => {
    // const filterSelected = e.target.checked;
    // setFilter(filterSelected);
    const _todoList = [...todoList];
    const todoIndex = _todoList?.findIndex((listItem) => {
      return listItem.id === id;
    });
    if (todoIndex !== -1) {
      _todoList[todoIndex].isCompleted = !_todoList[todoIndex]?.isCompleted;
      setTodoList(_todoList);
    }

    console.log("todoIndex", todoIndex);
  };

  // step-6
  // handle filter select box

  const handleSelectFilter = (e) => {
    const filterSelected = e?.target?.value;
    console.log("filterSelected=", filterSelected);
    setFilter(filterSelected);
  };

  useEffect(() => {
    let filterSelectedList = [];
    if (filter === "all") {
      filterSelectedList = todoList;
    } else if (filter === "completed") {
      filterSelectedList = todoList.filter((item) => {
        return item.isCompleted === true;
      });
    } else if (filter === "notCompleted") {
      filterSelectedList = todoList.filter((item) => {
        return item.isCompleted === false;
      });
    }
    console.log("filterSelectedList", filterSelectedList);
    setfilteredList(filterSelectedList);
  }, [todoList, filter]);

  return (
    <>
      <div className="home">
        <button className="btn btn-danger logout" onClick={logoutUser}>
          Logout
        </button>
        <div className="todo-body">
          <div className="app-container" id="taskList">
            <form onSubmit={addTodoItem}>
              <div className="d-flex justify-content-between">
                <h1 className="app-header">TO DO LIST</h1>
                <select
                  name="fiter"
                  id="filter"
                  className="filter"
                  onChange={(e) => handleSelectFilter(e)}
                >
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
                <button
                  type="submit"
                  className="submit-task"
                  title="Add Task"
                />
              </div>
            </form>
            <ul className="task-list p-0 py-3">
              {filteredList.map((item) => {
                return (
                  <>
                    <li
                      key={item.id}
                      className="task-list-item"
                      v-for="task in tasks"
                    >
                      <label className="task-list-item-label">
                        <input
                          type="checkbox"
                          checked={item?.isCompleted}
                          onChange={(e) => handleCheckBox(e, item.id)}
                        />
                        <span>{item.inputTask}</span>
                      </label>
                      <span
                        className="delete-btn"
                        title="Delete Task"
                        onClick={() => deleteItem(item.id)}
                      ></span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
