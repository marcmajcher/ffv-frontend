import { useState } from 'react';
const ENDPOINT = 'http://localhost:3000';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(undefined);

  function handleLogin(e) {
    e.preventDefault();

    fetch(`${ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then(json => {
        setCurrentUser(json.user.username)
        localStorage.setItem('token', json.jwt)
      });

    setUsername('');
    setPassword('');
  }

  return (
    <div>
      {currentUser ? (
        <div>Logged in as: {currentUser} </div>
      ) : (
        <div>No user logged in</div>
      )}

      <form onSubmit={handleLogin}>
        <h2>Login:</h2>
        <div>
          Username:{' '}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>

      <div><button onClick={e => localStorage.removeItem('token')}>Log Out</button></div>
    </div>
  );
}
