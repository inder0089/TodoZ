import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };

  const [formData, setformData] = useState(initialValue);

  const handleFormData = (e) => {
    const { name: fieldname, value: fieldvalue } = e.target;
    setformData({ ...formData, [fieldname]: fieldvalue });
  };

  const loginUserSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_API_URL}auth/login`,
      formData
    );

    localStorage.setItem(
      "auth",
      JSON.stringify({
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      })
    );
    navigate("/");
    console.log("response", response);

    setformData(initialValue);
  };

  useEffect(() => {
    const loginTokan = JSON.parse(localStorage.getItem("auth"));
    if (loginTokan?.access_token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={loginUserSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleFormData}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleFormData}
            />
            <button>login</button>
            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
