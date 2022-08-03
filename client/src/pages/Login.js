import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Login = (props) => {
  const {handleLogin, password, setPassword, username, setUsername, msg, setMsg} = props;
  const [loggedIn, isLoggedIn] = useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/api/users/login",
   
   {
    username: username,
    password: password
     
  },
  {withCredentials: true}
  );
  setMsg(response.data.message);
  console.log(response.data);
  
  isLoggedIn(true);
}

  return (
    <div>
      <div  style={{color : 'white'}}>
        <h1>Login</h1>
        {msg}
      </div>
      <div>
        <form  style={{color : 'white'}}>
          <div>
            <label>Username</label>
            <input type="text" value={username} id='username' onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' onClick={handleSubmit} >Login</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login