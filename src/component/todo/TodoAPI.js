/** @format */

import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import privateAPI from "../../api";

const initialValue = {
  title: "",
};

export const TodoAPI = () => {
  const [inputData, setInputData] = useState(initialValue);
  const [formData, setFromData] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  async function getTodo() {
    const response = await privateAPI.get("/todos");
    console.log("response", response);
    setFromData(response?.data?.todos?.reverse());
    return response;
  }

  const addlist = async (e) => {
    e.preventDefault();
    privateAPI
      .post("/todos", inputData)
      .then(async (response) => {
        await getTodo();
      })
      .catch((error) => {
        console.log("error", error);
      }); // add todo to DB
    // await getTodo(); // get todo from api

    setInputData(initialValue);
  };
  const deleteItem = async (iD) => {
    const deleteID = iD;
    await privateAPI.delete(`/todos/${deleteID}`);
    await getTodo();
  };

  const handleCheckbox = async (e, iD) => {
    const checklistID = iD;
    await privateAPI.get(`/isCompleted/${checklistID}`);
    await getTodo();
  };

  return (
    <div>
      <form onSubmit={addlist}>
        <input
          type="text"
          name="title"
          value={inputData.title}
          onChange={handleInput}
        />

        <button type="submit">Add</button>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
          </tr>
          {formData?.length > 0 ? (
            formData?.map((item) => {
              return (
                <tr key={item?._id}>
                  <td>
                    <input
                      type="checkbox"
                      name="complete"
                      checked={item?.isCompleted}
                      onClick={(e) => handleCheckbox(e, item?._id)}
                    />
                  </td>
                  <td>{item?.title}</td>
                  <td>
                    <button onClick={() => deleteItem(item?._id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h2> NO DATA </h2>
          )}
        </tbody>
      </table>
    </div>
  );
};
