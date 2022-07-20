import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './Components/Game';
import Home from './pages/Home';


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
          {/* put nav and search in app.js ? */}
           {/* routes */}
           <Routes>
          <Route path="/" element={<Home games={games} setGames={setGames} loading={loading} setLoading={setLoading}  />} />
          <Route path="/games/details/:id" element={<Game getSingleGame={getSingleGame} loading={loading} setLoading={setLoading} singleGame={singleGame}  />} />
          </Routes>
       
 
   
    </BrowserRouter>
  );
}

export default App;
