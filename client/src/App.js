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
  

  const getSingleGame = async (id) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3001/api/games/details/${id}`);
    setSingleGame(res.data);
    console.log(res.data);
    setLoading(false);
  }

  const searchGamesFunction = async (search) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3001/api/games/${search}`);
    setGames(res.data);
    setLoading(false);
  }

  const clearSearch = () => {
    setGames([{}]);
    setLoading(false);
  }

  const getTrending = async () => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3001/api/games/trending/isTrending`);
    setGames(res.data);
    setLoading(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get('http://localhost:3001/api/games');
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
          <Route path="/"  element={<Home searchGamesFunction={searchGamesFunction}  clearSearch={clearSearch} games={games}  setGames={setGames} loading={loading} setLoading={setLoading}  />} />
          <Route path="/games/details/:id" element={<Game getSingleGame={getSingleGame} loading={loading} setLoading={setLoading} singleGame={singleGame}  />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='*' element={<div>404</div>} />
          <Route path='/library' element={<Library />} />
          <Route path='/trending' element={<Trending  getTrending={getTrending} games={games} setGames={setGames}/> } />
          </Routes>
       
 
   
    </BrowserRouter>
  );
}

export default App;
