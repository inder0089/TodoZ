/** @format */

import axios from "axios";

const auth = JSON.parse(window.localStorage.getItem("auth"));

console.log("auth", auth);
const privateAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    Authorization: auth?.access_token,
  },
});

export default privateAPI;
