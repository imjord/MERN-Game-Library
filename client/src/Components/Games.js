import React, {useState, useEffect} from 'react'
import Spinner from '../assets/spinner.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Search from './Search'


const Games = (props) => {
  const {clearSearch, searchGamesFunction, games, setGames, loading, setLoading, searchGames} = props;
  
  if(searchGames){
    return (
      <div className='search-games'>
      {searchGames.map(game => (
        <div className='game-card' key={game._id}>
          <div className='game-card-image'>
            <img src={game.image} alt={game.name} />
          </div>
          </div>
    ))}
    </div>
    )}
  
    


  return (
    <div>
       <Search searchGamesFunction={searchGamesFunction} clearSearch={clearSearch}  />
      <div className='games'>
        {searchGames ?  (
            <div className='game' key={searchGames.id}>
              <div className='game-image'>
                <img src={searchGames.image} alt={searchGames.name} />
              </div>
              <div className='game-info'>
                <div className='game-title'>
                  <h3>{searchGames.name}</h3>
                </div>
                <div className='game-description'>
                  <p>{searchGames.description}</p>
                </div>
                <div className='game-release'>
                  <p>{searchGames.releaseDate}</p>
                </div>
                <div className='game-trailer'>
                  <a href={searchGames.trailer} target='_blank'>
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </div>
              </div>
            </div>
          ) : loading ? <img src={Spinner} alt='spinner' /> : (
          games.map(item => {
            return (
              <div className='game-list'>
                <FontAwesomeIcon id='heart' icon={faHeart} /> 
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