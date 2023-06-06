import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const initialValue = {
    username: "",
    password: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const handleFromData = (e) => {
    const { name: fieldname, value: fieldvalue } = e.target;
    setFormData({ ...formData, [fieldname]: fieldvalue });
  };

  const { username, password, email } = formData;
  //   console.log(formData.name);
  //   console.log(name);

  const formDataMap = [
    {
      fieldname: "username",
      fieldvalue: username,
      placeholder: "username",
    },
    {
      fieldname: "password",
      fieldvalue: password,
      placeholder: "password",
      type: "password",
    },
    {
      fieldname: "email",
      fieldvalue: email,
      placeholder: "Email",
      type: "email",
    },
  ];

  const registerSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    await axios.post(
      `${process.env.REACT_APP_BASE_API_URL}auth/register`,
      formData
    );
    setFormData(initialValue);
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit={registerSubmit}>
            {formDataMap?.map((item, index) => {
              const { fieldname, fieldvalue, placeholder, type } = item;
              {
                /* console.log(fieldname, fieldvalue, placeholder, type); */
              }
              return (
                <input
                  type={type ? type : "text"}
                  placeholder={placeholder}
                  name={fieldname}
                  value={fieldvalue}
                  onChange={handleFromData}
                  key={index}
                />
              );
            })}

            {/* <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleFromData}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleFromData}
            /> */}
            <button type="submit">create</button>
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
