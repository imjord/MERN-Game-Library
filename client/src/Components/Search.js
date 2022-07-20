import React from 'react'

const Search = () => {
  return (
    <div className='search'>
    <div className='search-bar'>
        <div>
            <div>
                <div className='tags'>
                <span>Trending</span>
      
            <span>PC</span>
            <span>PS4</span>
            <span>XBOX</span>
            <span>Switch</span>
                </div>
          
            <div>
            <input id='search' type="text" placeholder="Search" />
            </div>
            
            </div>
            
        </div>
       
    </div>
    </div>
  )
}

export default Search