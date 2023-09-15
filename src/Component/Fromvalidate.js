import React, { useState } from "react";

const FormValidate = () => {
  // const [name, setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  let { name, email, password, confirmPassword } = user;
  //console.log(user);
  function implementSignup(event) {
    event.preventDefault();

    //validation......
    if (!name || !email || !password || !confirmPassword) {
      setError(" please Fill All the Fields");
      setSuccess("");
      return;
    } else if (password !== confirmPassword) {
      setError("Enter Wromg Password");
      setSuccess("");
      return;
    }

    setSuccess("form Submitted Successfully");
    setError("");
  }
  return (
    <div>
      {error && <h3 style={{ color: "red" }}> {error} </h3>}
      {success && <h3 style={{ color: "green" }}> {success} </h3>}

      <form onSubmit={implementSignup}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        <br />
        <br />

        {/* we can directly use as callback instead of making updateName function */}
        {/* onChange={e =>setName(e.target.value)} */}
        <button type="submit">Submit</button>
        {/* <p>Your Name is: {name}</p> */}
      </form>
    </div>
  );
};

export default FormValidate;
