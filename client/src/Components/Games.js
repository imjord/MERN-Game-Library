import React, {useState} from 'react'
import Spinner from '../assets/spinner.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Games = (props) => {
  const {games, setGames, loading, setLoading} = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div>
      <div className='title'>
        
        </div>
      <div className='games'>
        {loading ? <img src={Spinner} alt='spinner' /> : (
          games.map(item => {
            return (
              <div className='game-list'>
                <FontAwesomeIcon id='heart' icon={faHeart} /> 
              <div key={item._id}>
                <h2>{item.name}</h2>
               
                <img className='game-image' src={`assets/images/${item.image}`} alt={item.name} />
                <p><b>$</b>{item.price}</p>
                <p>{item.category}</p>
                <button>Add to Cart</button>
                <button><Link id='react-link' to={`/games/details/${item._id}`}>Game Details</Link> </button>
              </div>
              </div>
            )
          })
        )
        }
      </div>
    </div>
  )
}

export default Games