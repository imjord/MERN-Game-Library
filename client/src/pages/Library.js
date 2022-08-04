import React, {useEffect, useState, } from 'react'
import axios from 'axios'

const Library = (props) => {
  const {handleLogin, password, setPassword, username, setUsername, msg, setMsg} = props;
  const [errorMsg, setErrorMsg] = useState(false);
  const [libraryMsg, setLibraryMsg] = useState('');
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    
    const getLibrary =  () => {
      axios.get('http://localhost:3001/api/users/library', {
        withCredentials: true
      })
      .then(res => {
        console.log(res.data.library)
        setErrorMsg(false)
        setLibrary(res.data.library);

      }).catch(err => {
        console.log(err.response.data.message)
        setErrorMsg(true)
        setLibraryMsg(err.response.data.message)
      }
      )
    }
        getLibrary();
  }, [] );




  return (
    
    <div>
      {errorMsg ? <p>{libraryMsg}</p> : <div> <p>Welcome to your library!
        Your Game Library:
        <div className='games'>{library.map(game => {
          return (
            <div className='game-list'>
              <div key={game._id}>
                <h2>{game.name}</h2>
               
                <img className='game-image' src={`assets/images/${game.image}`} alt={game.name} />
                
                <p>{game.category}</p>
                
                <button>Remove Game</button>
              </div>
              </div>
        )
        }
        )}
        </div> 
        </p>
        </div>
        }
        
   </div>
  )
}

export default Library