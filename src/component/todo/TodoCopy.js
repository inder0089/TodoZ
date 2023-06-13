import React, { useEffect, useState } from "react";

const TodoCopy = () => {
  const initialValue = {
    day: "",
    todoinput: "",
    isCompleted: false,
  };

  const [inputData, setInputData] = useState(initialValue);
  const [todoList, setTodoList] = useState([]);
  const [selectedfilter, setSelectedFilter] = useState("all");
  const [filteredList, setfilteredList] = useState([]);

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const addTodoList = () => {
    // setTodoList(...todoList, inputData);
  };

  const submitTodoList = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: Date.now(), ...inputData }]);
    // console.log("todoList", todoList);
    setInputData(initialValue);
  };
  //   console.log("todoList", todoList);

  //   console.log("inputData", inputData);

  //   const { day, todoinput } = inputData;

  const fieldList = [
    {
      type: "text",
      placeholder: "Day",
      name: "day",
      value: inputData.day,
    },
    {
      type: "text",
      placeholder: "Todo List",
      name: "todoinput",
      value: inputData.todoinput,
    },
  ];

  const deleteItem = (iD) => {
    const _todoList = todoList.filter((item) => {
      return iD !== item?.id;
    });
    setTodoList(_todoList);
  };

  // select====================================

  const filterSelect = (e) => {
    const selectvalue = e?.target?.value;
    // console.log("selectvalue", selectvalue);
    setSelectedFilter(selectvalue);
  };

  // checkbox =========================

  const handlecheckBox = (e, iD) => {
    // const checkBoxValue = e.target.checked;
    // console.log("checkBoxValue", checkBoxValue);

    const checkedItem = [...todoList];
    const checkedItemIndex = checkedItem.findIndex((item) => {
      return iD === item.id;
    });
    if (checkedItemIndex !== -1) {
      checkedItem[checkedItemIndex].isCompleted = !checkedItem[checkedItemIndex]
        ?.isCompleted;
      setTodoList(checkedItem);
    }
    // console.log("checkedItemIndex", checkedItemIndex);
    console.log("checkedItem", checkedItem);
  };

  useEffect(() => {
    let filtereditem = [];
    if (selectedfilter === "all") {
      filtereditem = todoList;
    } else if (selectedfilter === "completed") {
      filtereditem = todoList.filter((item) => {
        return item.isCompleted === true;
      });
    } else if (selectedfilter === "notcompleted") {
      filtereditem = todoList.filter((item) => {
        return item.isCompleted === false;
      });
    }
    setfilteredList(filtereditem);
  }, [todoList, selectedfilter]);

  // search========================
  const [searchText, setSearchText] = useState("");
  const searchButton = () => {
    const searchDay = searchText.toLowerCase();
    if (searchDay.length > 2) {
      const copyfilteredList = [...todoList];
      //   console.log("copyfilteredList", copyfilteredList);
      const searchList = copyfilteredList.filter((item) => {
        return (
          item?.day?.toLowerCase()?.includes(searchDay) ||
          item?.todoinput?.toLowerCase()?.includes(searchDay)
        );
      });
      console.log("searchList", searchList);
      setfilteredList(searchList);
    } else {
      setfilteredList(todoList);
    }
  };
  useEffect(() => {
    searchButton();
  }, [searchText]);

  // edit==================================

  const [editItemIndex, setEditItemIndex] = useState("");

  const editItem = (item) => {
    // console.log("item", item);
    const _item = { ...item };
    setInputData(_item);
    setEditItemIndex(item.id);
  };

  const editItemUpdate = (e) => {
    e.preventDefault();
    const editItemList = [...todoList];

    const _editItemIndex = todoList.findIndex((it) => it.id === editItemIndex);

    editItemList[_editItemIndex] = inputData;

    setTodoList(editItemList);
    setInputData(initialValue);
    setEditItemIndex("");
  };

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={editItemIndex ? editItemUpdate : submitTodoList}>
        <div className="inputfields">
          {fieldList.map((item, index) => {
            {
              /* console.log("item", item); */
            }
            const { type, placeholder, name, value } = item;
            return (
              <input
                key={index}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleInputField}
              />
            );
          })}
          {/* <input
            type="text"
            placeholder="Day"
            name="day"
            value={inputData.day}
            onChange={handleInputField}
          />
          <input
            type="text"
            placeholder="Todo List"
            name="todoinput"
            value={inputData.todoinput}
            onChange={handleInputField}
          /> */}
          <button type="submit">{editItemIndex ? "Update" : "ADD"} </button>

          <select onChange={(e) => filterSelect(e)}>
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="notcompleted">notcompleted</option>
          </select>
        </div>
      </form>
      {/* <button onClick={editItemUpdate}>Update</button> */}
      {todoList.length > 0 && (
        <div>
          <input
            type="text"
            value={searchText}
            name="search"
            autocomplete="false"
            placeholder="search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchButton}>search</button>
        </div>
      )}
      <table>
        <tbody>
          <tr>
            <th>checkbox</th>
            <th>Day</th>
            <th>name</th>
            <th>delete</th>
            <th>edit</th>
          </tr>
          {filteredList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item?.isCompleted}
                    onChange={(e) => handlecheckBox(e, item.id)}
                  />
                </td>
                <td>{item.day}</td>
                <td>{item.todoinput}</td>
                <td>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => editItem(item)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoCopy;
