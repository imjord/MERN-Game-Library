import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Game = (props) => {
  const {singleGame, loading, setLoading, getSingleGame} = props;
  const id = useParams().id;
  useEffect(() => {
  getSingleGame(id);
  },[]);
  return (
    <div className='single-game'>

      <div className='single-title'>
        <div>
        <h1>{singleGame.name}</h1>
        </div>
        </div>  
      <div className='right-aside'>
        <div>
        <h4>Description:</h4>
         {singleGame.description}
         <h4>Release Date:</h4>
          <p>{singleGame.releaseDate}</p>
        </div>
        </div>
      <div className='trailer'>
        <div>
        <h4>Trailer</h4>
        <iframe width="560" height="315" src={singleGame.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        </div>
        </div>
      
    </div>
  )
}

export default Game