import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Categories from '../pages/Categories'
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const { loggedIn, setLoggedIn } = props;

  const toggle = () => setIsOpen(!isOpen)

  const logout = async () => {
    // delete local storage
   
    const res = await axios.get('http://localhost:3001/api/users/logout', {withCredentials: true})
    localStorage.removeItem('loggedIn');
    setLoggedIn(false)
  }


  setTimeout(() => {

    if (isOpen) {
      setIsOpen(false)
    }
  }, 5000)

  useEffect(() => {
    console.log('here')
    console.log(loggedIn)
    // check local storage for logged in
    if (localStorage.getItem('loggedIn') == 'true') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  return (
    <nav>
        <div className='content'>
            <div className='logo'>
              <h2>Imjord Games </h2>
              <p id='gameicon'> <FontAwesomeIcon icon={faGamepad} /> </p>
                </div>
                <div className='nav-links'>
                    <div className='main-links'>
                    <a href='#' id='store'  onClick={toggle}>Store</a>
                    {isOpen && <div  className='dropdown'> 
                      <a href='/'>Games</a>
                      <a href='/'>Categories</a>
                    </div>}
                    <Link to='/library'>Library</Link>
                    
                    <Link to='/about'>About</Link>
                    </div>
                    {loggedIn ? <button onClick={logout}> <Link to='/logout'>Logout</Link> </button> : 
                    <div className='global-links'>
                    <div className='global-link'>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Sign up</Link>
                    </div>
                </div>
      }
                </div>
                
        </div>
    </nav>
  )
}

export default Navbar