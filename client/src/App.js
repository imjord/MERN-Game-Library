import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './Components/Game';
import Home from './pages/Home';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Library from './pages/Library';
import Trending from './pages/Trending';

function App() {
  const [games, setGames] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [singleGame, setSingleGame] = useState({});
  const [loggedIn, isLoggedIn] = useState(false);
  const [msg, setMsg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const getSingleGame = async (id) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3001/api/games/details/${id}`, {withCredentials: true});
    setSingleGame(res.data);
    console.log(res.data);
    setLoading(false);
  }

  const searchGamesFunction = async (search) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3001/api/games/${search}`, {withCredentials: true});
    console.log(res);
    setGames(res.data);
    setLoading(false);
  }

  const clearSearch = () => {
    setGames([{}]);
    setLoading(false);
  }

  const getTrending = async () => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3001/api/games/trending/isTrending`, {withCredentials: true});
    setGames(res.data);
    setLoading(false);
  }

  const handleLogin = async () => {
      const response = await axios.post("http://localhost:3001/api/users/login",
     
     {
      username: username,
      password: password
       
    },
    {withCredentials: true}
    );
    setMsg(response.data.message);
    console.log(response.data);
    
    isLoggedIn(true);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
  }

  // add like 
  const addLike = async (gameid) => {
    const response = await axios.post(`http://localhost:3001/api/users/addgame`, {
      _id: gameid
    }, {withCredentials: true});
    console.log(response);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get('http://localhost:3001/api/games', {withCredentials: true});
      setGames(result.data);
      setLoading(false);
    }
    fetchData();
  }, []);



  return (
    <BrowserRouter>
     <Navbar />
    
          {/* put nav and search in app.js ? */}
           {/* routes */}
           <Routes>
          <Route path="/"  element={<Home searchGamesFunction={searchGamesFunction} addLike={addLike}  clearSearch={clearSearch} games={games}  setGames={setGames} loading={loading} setLoading={setLoading}  />} />
          <Route path="/games/details/:id" element={<Game getSingleGame={getSingleGame} loading={loading} setLoading={setLoading} singleGame={singleGame}  />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} msg={msg} setMsg={setMsg} username={username} setUsername={setUsername} password={password} setPassword={setPassword} loggedIn={loggedIn} /> } />
          <Route path="/register" element={<Register/>} />
          <Route path='*' element={<div>404</div>} />
          <Route path='/library' element={<Library msg={msg} setMsg={setMsg}  loggedIn={loggedIn} isLoggedIn={isLoggedIn} />} />
          <Route path='/trending' element={<Trending  getTrending={getTrending} games={games} setGames={setGames}/> } />
          </Routes>
       
 
   
    </BrowserRouter>
  );
}

export default App;
