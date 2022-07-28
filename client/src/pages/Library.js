import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Library = () => {
  const [msg, setMsg] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users/library')
      .then(response => {
        console.log(response.data.message)
        setMsg(response.data.message)
      }).catch(err => {
        console.log(err)
        console.log(err.response.data.message)
        setMsg(err.response.data.message)
      }
    )
  })
  return (
    <div>
    {loggedIn ? <div> youre logged in </div> : <div>{msg}</div>}
   </div>
  )
}

export default Library