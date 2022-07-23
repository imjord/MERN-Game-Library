import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Categories from '../pages/Categories'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  setTimeout(() => {

    if (isOpen) {
      setIsOpen(false)
    }
  }, 5000)

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

                    <div className='global-links'>
                    <div className='global-link'>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Sign up</Link>
                    </div>
                </div>
                </div>
                
        </div>
    </nav>
  )
}

export default Navbar