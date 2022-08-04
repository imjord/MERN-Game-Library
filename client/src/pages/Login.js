import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [navigate, setNavigate] = useState(false);
  
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
  // set logged in to local storage
  localStorage.setItem('loggedIn', 'true');
  
  setNavigate(true);

}

  return (
    <div>
      <div  style={{color : 'white'}}>
        
        {msg ? <p>{msg}</p> : null}
      </div>
      <div className='form-wrapper'>
        
        <form className='form'  style={{color : 'white'}}>
          <div>
          <h1 id='form-header'>Login</h1>
            <label>Username</label>
            <input type="text" value={username} id='username' onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' onClick={handleSubmit} >Login</button>
        </div>
        </form>
        {navigate ? <Navigate to='/' /> : null}
      </div>
    </div>
  )
}

export default Login