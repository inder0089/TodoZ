import React, { useState } from "react";

const TodoCopy = () => {
  const initialValue = {
    todoinput: "",
    iscompleted: false,
  };

  const [input, setInput] = useState(initialValue);
  const [todoList, setTodoList] = useState([]);

  const todoinputlist = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitTodo = () => {};
  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={submitTodo}>
        <div className="inputfields">
          <input
            type="text"
            name="todoinput"
            value={input.todoinput}
            onChange={(e) => todoinputlist(e)}
          />
          <button type="submit">ADD</button>
        </div>
      </form>
      <table>
        <tr>
          <th>checkbox</th>
          <th>name</th>
          <th>delete</th>
          <th>edit</th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" checked />
          </td>
          <td>rushi</td>
          <td>
            <button>Delete</button>
          </td>
          <td>
            <button>Edit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TodoCopy;
