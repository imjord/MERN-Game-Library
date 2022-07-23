import React, {useEffect, useState} from 'react'
import Games from '../Components/Games';

const Trending = (props) => {
    const {getTrending, clearSearch, searchGamesFunction, games, setGames, loading, setLoading} = props;

    useEffect(() => {
        setGames([{}]);
        getTrending();
    }, []);
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

export default Trending