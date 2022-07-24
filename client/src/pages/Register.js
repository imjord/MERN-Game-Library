import React, {useState} from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/api/users", {
        username: username,
        password: password
    });

    console.log(response);
    setPassword('');
    setUsername('');

}
  

  return (
    <div>
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <form>
          <div>
            <label>Username</label>
            <input value={username}  onChange={(e) => {setUsername(e.target.value)}} type="text" />
            <label>Password</label>
            <input value={password} type="password" onChange={(e) => {setPassword(e.target.value)}} />
            <button type='submit' onClick={handleSubmit}> Sign up! </button>
        </div>
        </form>
      </div>

    </div>
  )
}

export default Register