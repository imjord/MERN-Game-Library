import React, {useState} from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/api/users", {
        username: username,
        password: password
    },
    {withCredentials: true});

    console.log(response);
    setMsg(response.data.message);
    setPassword('');
    setUsername('');

}

setTimeout(() => {
    setMsg('');
}, 5000);
  

  return (
    <div>
      <div style={{color : 'white'}}>
        {msg}
        
      </div>
      <div className='form-wrapper'>
        <form className='form' style={{color : 'white'}}>
          <div>
          <h1 id='form-header'>Register</h1>
            <label>Username</label>
            <input value={username}  onChange={(e) => {setUsername(e.target.value)}} type="text" />
            <label>Password</label>
            <input value={password} type="password" onChange={(e) => {setPassword(e.target.value)}} />
            <button type='submit' onClick={handleSubmit}> Sign up </button>
        </div>
        </form>
      </div>

    </div>
  )
}

export default Register