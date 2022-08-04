import React, {useEffect, useState} from 'react'
import Games from '../Components/Games';

const Trending = (props) => {
    const {loggedIn, setLoggedIn,  getTrending, clearSearch, searchGamesFunction, games, setGames, loading, setLoading} = props;

    useEffect(() => {
      if (localStorage.getItem('loggedIn') == 'true') {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
      console.log(loggedIn);
        setGames([{}]);
        getTrending();
    }, []);
  return (
    <div className="App">
    <main>
      <div className='title'>
        <div>
          <Games loggedIn={loggedIn} setLoggedIn={setLoggedIn} getTrending={getTrending} searchGamesFunction={searchGamesFunction} games={games} setGames={setGames} loading={loading} setLoading={setLoading}  />
          </div>
          </div>
        </main>
        </div>
  )
}

export default Trending