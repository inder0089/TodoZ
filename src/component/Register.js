import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const initialValue = {
    name: "",
    password: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const handleFromData = (e) => {
    const { name: fieldname, value: fieldvalue } = e.target;
    setFormData({ ...formData, [fieldname]: fieldvalue });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormData(initialValue);
  };

  const { name, password, email } = formData;
  //   console.log(formData.name);
  //   console.log(name);

  const formDataMap = [
    {
      fieldname: "name",
      fieldvalue: name,
      placeholder: "name",
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

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit={registerSubmit}>
            {formDataMap?.map((item) => {
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
