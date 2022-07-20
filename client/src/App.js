import Navbar from './Components/Navbar';
import './App.css';
import Search from './Components/Search';
import Games from './Components/Games';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Categories from './pages/Categories';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './Components/Game';


function App() {
  const [games, setGames] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [singleGame, setSingleGame] = useState({});

  const getSingleGame = async (id) => {
    setLoading(true);
    const res = await axios.get(`http://localhost:3001/api/games/details/${id}`);
    setSingleGame(res.data);
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
    <div className="App">
      <Navbar />
     
      <main>
       
        <Search />
        
        <div className='title'>
          
          <div>
        
            <Games games={games} setGames={setGames} loading={loading} setLoading={setLoading}  />
            </div>
            </div>
            
          </main>
          
         
           {/* routes */}
           <Routes>
          <Route path="/games/details/:id" element={<Game/>} />
          </Routes>
       
    </div>
   
    </BrowserRouter>
  );
}

export default App;
