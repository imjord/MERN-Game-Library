import React, {useState, useEffect} from 'react'

import Games from '../Components/Games';


const Home = (props) => {
    const {clearSearch, searchGamesFunction, games, setGames, loading, setLoading} = props;


  return (
    <div className="App">
      <main>
        <div className='title'>
          <div>
            <Games searchGamesFunction={searchGamesFunction} games={games} setGames={setGames} loading={loading} setLoading={setLoading}  />
            </div>
            </div>
          </main>
          </div>
  )
}

export default Home