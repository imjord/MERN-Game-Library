import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Library = (props) => {
  const {handleLogin, password, setPassword, username, setUsername, msg, setMsg, loggedIn, isLoggedIn} = props;


  useEffect(() => {
    axios.get('http://localhost:3001/api/users/library', {withCredentials: true})
      .then(response => {
        console.log(response)
        setMsg(response.data)
        console.log(loggedIn)
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