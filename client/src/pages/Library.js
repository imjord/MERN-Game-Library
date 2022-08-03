import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Library = (props) => {
  const {handleLogin, password, setPassword, username, setUsername, msg, setMsg, loggedIn, isLoggedIn} = props;


  useEffect(() => {
    console.log(loggedIn);
  })
  return (
    <div>
    {loggedIn ? <div> youre logged in </div> : <div> Log in and add games you like to your library!</div>}
   </div>
  )
}

export default Library