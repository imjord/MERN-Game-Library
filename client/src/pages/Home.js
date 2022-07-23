import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Games from '../Components/Games';


const Home = (props) => {
    const {getTrending, clearSearch, searchGamesFunction, games, setGames, loading, setLoading} = props;

   


  return (
    <div className="App">
      <main>
        <div className='title'>
          <div>
            <Games getTrending={getTrending} searchGamesFunction={searchGamesFunction} games={games} setGames={setGames} loading={loading} setLoading={setLoading}  />
            </div>
            </div>
          </main>
          </div>
  )
}

export default Home