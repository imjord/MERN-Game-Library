import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Logout = (props) => {
  const { loggedIn, setLoggedIn } = props;

  useEffect(() => {
    if (localStorage.getItem("loggedIn") == "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  return (
    <div className="msg-div">
      {!loggedIn ? (
        <p className="library-p">
          Please
          <Link id="log-p" to={"/login"}>
            {" "}
            login{" "}
          </Link>
        </p>
      ) : (
        <p className="library-p">You have been logged out.</p>
      )}
    </div>
  );
};

export default Logout;
