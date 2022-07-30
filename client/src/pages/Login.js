import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Login = () => {
  return (
    <div>
      <div div style={{color : 'white'}}>
        <h1>Login</h1>
      </div>
      <div>
        <form div style={{color : 'white'}}>
          <div>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button>Login</button>
        </div>
        </form>
      </div>

    </div>
  )
}

export default Login