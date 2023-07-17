import React, { useState } from "react";

const Commontest = () => {
  //   const [valueX, setValueX] = useState(10);
  //   const updateX = () => {
  //     setValueX(valueX + 10);
  //   };

  const userDtail = {
    firstName: "inder",
    lastName: "singh",
    address: {
      addressone: "khanna",
      addresssecond: "punjab",
    },
  };

  const [userinfo, setUserInfo] = useState(userDtail);

  const update = () => {
    setUserInfo({
      ...userinfo,
      firstName: "rushi",
      lastName: "patil",
      address: {
        ...userinfo.address,
        addressone: "khardi",
        addresssecond: "pune",
      },
    });

    console.log(userinfo);
  };

  return (
    <div>
      {/* <h2>Value of x : {valueX}</h2>
      <button onClick={updateX}>update</button> */}
      <h1>
        My name:{userinfo.firstName} {userinfo.lastName}
        <br />
        My address:{userinfo.address.addressone}
        <br />
        My address:{userinfo.address.addresssecond}
      </h1>
      <button onClick={update}>update</button>
    </div>
  );
};

export default Commontest;
