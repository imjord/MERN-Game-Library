import React, {useEffect, useState, } from 'react'
import axios from 'axios'

const Library = (props) => {
  const {handleLogin, password, setPassword, username, setUsername, msg, setMsg, loggedIn, setLoggedIn} = props;
  const [errorMsg, setErrorMsg] = useState(false);
  const [libraryMsg, setLibraryMsg] = useState('');
  const [library, setLibrary] = useState([]);
  const [removeGameMsg, setRemoveGameMsg] = useState('');


  const removeGame = async (gameid) => {
    const response = await axios.put(`http://localhost:3001/api/users/remove`,{
      _id: gameid
    }, {withCredentials: true});
    
    console.log(response);
    setRemoveGameMsg(response.data.message);
    
    
    // setTimeout(() => {
    //   setRemoveGameMsg('');
    // }, 2000);
    
    // }).catch(err => {
    //   setLibraryMsg(err.response.data.msg)
    // }).finally(() => {
    //   setTimeout(() => {
    //     setLibraryMsg('')
    //   }, 2000)
    // }
    // )
  
  }


  useEffect(() => {
    // check local storage for logged in
    if (localStorage.getItem('loggedIn') == 'true') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }

    setRemoveGameMsg(false)
    
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
  }, [removeGameMsg] );




  return (
    
    <div>
      {errorMsg ? <p>{libraryMsg}</p> : <div> 
        Your Game Library:
        
        {library.length <= 0 ? <p>You have no games in your library!</p> :
        <div className='games'>{library.map(game => {
          return (
            <div className='game-list'>
              <div key={game._id}>
                <h2>{game.name}</h2>
                {/* {removeGameMsg ? <p className='remove'>{removeGameMsg}</p> : null} */}
                <img className='game-image' src={`assets/images/${game.image}`} alt={game.name} />
                
                <p>{game.category}</p>
                
                <button onClick={() => removeGame(game._id)}>Remove Game</button>
              </div>
              </div>
        )
        }
        )}
        </div> 
        }
        </div>
        }
        
   </div>
  )
}

export default Library