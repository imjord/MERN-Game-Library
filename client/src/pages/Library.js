import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
const Library = (props) => {
  const {
    handleLogin,
    password,
    setPassword,
    username,
    setUsername,
    msg,
    setMsg,
    loggedIn,
    setLoggedIn,
  } = props;
  const [errorMsg, setErrorMsg] = useState(false);
  const [libraryMsg, setLibraryMsg] = useState("");
  const [library, setLibrary] = useState([]);
  const [removeGameMsg, setRemoveGameMsg] = useState("");

  const removeGame = async (gameid) => {
    const response = await axios.put(
      `/api/users/remove`,
      {
        _id: gameid,
      },
      { withCredentials: true }
    );

    setRemoveGameMsg(response.data.message);

    // setTimeout(() => {
    //   setRemoveGameMsg('');
    // }, 2000);

    // }).catch(err => {
    //   setLibraryMsg(err.response.data.msg)
    // }).finally(() => {
    //   setTimeout(() => {
    //     setLibraryMsg('')
    //   }, 2000)
    // }
    // )
  };

  useEffect(() => {
    // check local storage for logged in
    if (localStorage.getItem("loggedIn") == "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setRemoveGameMsg(false);

    const getLibrary = () => {
      axios
        .get("/api/users/library", {
          withCredentials: true,
        })
        .then((res) => {
          setErrorMsg(false);
          setLibrary(res.data.library);
        })
        .catch((err) => {
          setErrorMsg(true);
          setLibraryMsg(err.response.data.message);
        });
    };
    getLibrary();
  }, [removeGameMsg]);

  return (
    <div>
      {errorMsg ? (
        <div className="msg-div">
          {" "}
          <p className="library-p">{libraryMsg}</p>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="library-icon"
          />
        </div>
      ) : (
        <div>
          {library.length <= 0 ? (
            <p className="library-p">You have no games in your library!</p>
          ) : (
            <div className="games">
              {library.map((game) => {
                return (
                  <div className="game-list" key={game._id}>
                    <div>
                      <h2>{game.name}</h2>
                      {/* {removeGameMsg ? <p className='remove'>{removeGameMsg}</p> : null} */}
                      <img
                        className="game-image"
                        src={`assets/images/${game.image}`}
                        alt={game.name}
                      />

                      <p>{game.category}</p>

                      <button onClick={() => removeGame(game._id)}>
                        Remove Game
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Library;
