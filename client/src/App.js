import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Components/Game";
import Home from "./pages/Home";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Library from "./pages/Library";
import Trending from "./pages/Trending";
import Logout from "./pages/Logout";

function App() {
  const [games, setGames] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [singleGame, setSingleGame] = useState({});
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const getSingleGame = async (id) => {
    setLoading(true);
    const res = await axios.get(`/api/games/details/${id}`, {
      withCredentials: true,
    });
    setSingleGame(res.data);

    setLoading(false);
  };

  const searchGamesFunction = async (search) => {
    setLoading(true);
    const res = await axios.get(`/api/games/${search}`, {
      withCredentials: true,
    });

    setGames(res.data);
    setLoading(false);
  };

  const clearSearch = () => {
    setGames([{}]);
    setLoading(false);
  };

  const getTrending = async () => {
    setLoading(true);
    const res = await axios.get(`/api/games/trending/isTrending`, {
      withCredentials: true,
    });
    setGames(res.data);
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  };

  // add like
  const addLike = async (gameid) => {
    const response = await axios.post(
      `/api/users/addgame`,
      {
        _id: gameid,
      },
      { withCredentials: true }
    );
  };

  useEffect(() => {
    // check local storage for logged in
    if (localStorage.getItem("loggedIn") == "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get("/api/games", { withCredentials: true });
      setGames(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {/* put nav and search in app.js ? */}
      {/* routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              searchGamesFunction={searchGamesFunction}
              addLike={addLike}
              clearSearch={clearSearch}
              games={games}
              setGames={setGames}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="/games/details/:id"
          element={
            <Game
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              getSingleGame={getSingleGame}
              loading={loading}
              setLoading={setLoading}
              singleGame={singleGame}
            />
          }
        />
        <Route
          path="/about"
          element={<About loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/login"
          element={
            <Login
              msg={msg}
              setMsg={setMsg}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>404</div>} />
        <Route
          path="/logout"
          element={<Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/library"
          element={
            <Library
              msg={msg}
              setMsg={setMsg}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path="/trending"
          element={
            <Trending
              getTrending={getTrending}
              games={games}
              setGames={setGames}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
