import React, {useState} from 'react'

const Search = (props) => {
  const {searchGamesFunction, clearSearch, searchGames, loading} = props;
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search === '') {
      alert('Please enter a search term');
    } else {
      searchGamesFunction(search);
       setSearch('');
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

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
              <form onSubmit={handleSubmit}>
            <input id='search' type="text" placeholder="Search" value={search} onChange={handleChange} />
              </form>
            </div>
            
            </div>
            
        </div>
       
    </div>
    </div>
  )
}

export default Search