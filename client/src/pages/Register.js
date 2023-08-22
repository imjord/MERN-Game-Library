import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/users",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      );
      setMsg(response.data.message);
      setPassword("");
      setUsername("");
    } catch (err) {
      setError(err.response.data);
      setPassword("");
      setUsername("");
      toggleModal();
    }
  }

  // setTimeout(() => {
  //     setMsg('');
  // }, 10000);

  return (
    <div>
      <div style={{ color: "white" }}>
        {modal ? (
          <div className="error-modal">
            <div className="error-content">
              <span onClick={() => closeModal()} className="close">
                &times;
              </span>
              <div>
                {error.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}{" "}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="form-wrapper">
        <form className="form" style={{ color: "white" }}>
          <div>
            <p className="alert-sucess">{msg} </p>
            <h1 id="form-header">Register</h1>
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
            />
            <label>Password</label>
            <input
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubmit}>
              {" "}
              Sign up{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
