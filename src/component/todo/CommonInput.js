import React from "react";

const CommonInput = (props) => {
  const { type, placeholder, name, value, handleInputField } = props;

  const handleInputFieldNew = () => {
    const fieldname = e.target.name;
    const fieldvalue = e.target.value;

    // const { name, value } = e.target;
  };
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        // onChange={() => handleInputField(e.target.value)}
        onChange={(e) => handleInputField(e)}
      />
    </div>
  );
};

export default CommonInput;
