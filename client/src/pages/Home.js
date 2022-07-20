import React, {useState, useEffect} from 'react'
import Search from '../Components/Search';
import Games from '../Components/Games';
import Navbar from '../Components/Navbar';

const Home = (props) => {
    const {games, setGames, loading, setLoading} = props;


  return (
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
          </div>
  )
}

export default Home