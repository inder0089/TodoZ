import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValue = {
    username: "",
    password: "",
  };

  const [formData, setformData] = useState(initialValue);

  const handleFormData = (e) => {
    const { name: fieldname, value: fieldvalue } = e.target;
    setformData({ ...formData, [fieldname]: fieldvalue });
  };

  const loginUserSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setformData(initialValue);
  };

  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={loginUserSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={formData.username}
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
