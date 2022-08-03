import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Games from '../Components/Games';


const Home = (props) => {
    const {getTrending, loggedIn, clearSearch, searchGamesFunction, games, setGames, loading, setLoading, addLike} = props;

   
    console.log(loggedIn);

  return (
    <div className="App">
      <main>
        <div className='title'>
          <div>
            <Games loggedIn={loggedIn} getTrending={getTrending} searchGamesFunction={searchGamesFunction} games={games} addLike={addLike} setGames={setGames} loading={loading} setLoading={setLoading}  />
            </div>
            </div>
          </main>
          </div>
  )
}

export default Home