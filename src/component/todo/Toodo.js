import React, { useState } from "react";

const Toodo = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    isChecked: false,
  };

  const [inputDate, setinputData] = useState(initialValue);
  const [todoList, setTodoList] = useState([]);

  const todoInput = (e) => {
    const { name, value } = e.target;
    setinputData({ ...inputDate, [name]: value });
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: Date.now(), ...inputDate }]);
    setinputData(initialValue);
  };
  console.log("todoList", todoList);

  return (
    <div>
      <h1>texala.net</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputDate.firstName}
          name="firstName"
          onChange={todoInput}
        />
        <input
          type="text"
          value={inputDate.lastName}
          name="lastName"
          onChange={todoInput}
        />
        <button>Add</button>
      </form>
      <table>
        <tbody>
          <tr>
            <th>NO</th>
            <th>completed checked</th>
            <th>First Name</th>
            <th>lastName</th>
          </tr>

          <tr>
            <td>NO</td>
            <td>completed checked</td>
            <td>First Name</td>
            <td>lastName</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Toodo;
