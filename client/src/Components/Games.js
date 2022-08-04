import React, {useState, useEffect} from 'react'
import Spinner from '../assets/spinner.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Search from './Search'


const Games = (props) => {
  const { setLoggedIn,getTrending, loggedIn, addLike, clearSearch, searchGamesFunction, games, setGames, loading, setLoading, searchGames} = props;
  console.log(loggedIn);
  useEffect(() => {
  
    // check local storage for logged in
    if (localStorage.getItem('loggedIn') == 'true') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])
  return (
    <div>
       <Search searchGamesFunction={searchGamesFunction} clearSearch={clearSearch}  />
      <div className='games'>
        {loading ? <img src={Spinner} alt='spinner' /> : (
          games.map(item => {
            return (
              <div className='game-list'>
                <FontAwesomeIcon onClick={() => addLike(item._id)}  id='heart' icon={faHeart} /> 
              <div key={item._id}>
                <h2>{item.name}</h2>
               
                <img className='game-image' src={`assets/images/${item.image}`} alt={item.name} />
                
                <p>{item.category}</p>
                
                <button><Link id='react-link' to={`/games/details/${item._id}`}>Game Details</Link> </button>
              </div>
              </div>
            )
            })
          )}
      </div>
    </div>
  )
}

export default Games