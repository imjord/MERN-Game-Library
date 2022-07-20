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
                      <a><Link path="/categorys" element={<Categories />}>Categories</Link></a>
                    </div>}
                    <a href='#'  >Library</a>
                    
                    <a href='#'  >About</a>
                    </div>

                    <div className='global-links'>
                    <div className='global-link'>
                        <a href='#'>Login</a>
                        <a href='#'>Sign Up</a>
                    </div>
                </div>
                </div>
                
        </div>
    </nav>
  )
}

export default Navbar