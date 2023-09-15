import React, { useState } from "react";

const FormValidate = () => {
  const [name, setName] = useState("");
  const [upperCaseName, setUpperCase] = useState("");

  //   function makeItCapital() {
  //     setName(name.toUpperCase());
  //   }
  function makeItCapital() {
    setUpperCase(name.toUpperCase());
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter yout Name"
        onChange={(e) => setName(e.target.value)}
      />
      {/* we can directly use as callback instead of making updateName function */}
      {/* onChange={e =>setName(e.target.value)} */}
      <button onClick={makeItCapital}>Convert To Uppercase</button>
      {/* <p>Your Name is: {name}</p> */}
      <p>Your Name is: {upperCaseName}</p>
    </div>
  );
};

export default FormValidate;
