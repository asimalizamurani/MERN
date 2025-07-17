import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Passing the username and password to the UserContext
    setUser({username, password});

    setUsername('');
    setPassword('');
  }

  return (
    <>
    <h1>Login</h1>
    <input
     value={username}
     onChange={(e) => setUsername(e.target.value)}
     type="text" placeholder='username' />
    <input
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     type="password" placeholder='password' />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login