import { useState } from 'react';
const ENDPOINT = 'http://localhost:3000';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registeredUser, setRegisteredUser] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    fetch(`${ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
          name,
        },
      }),
    })
      .then((res) => res.json())
      .then(json => setRegisteredUser(json.user.username));

    setUsername('');
    setPassword('');
    setName('');
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <div>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>

      {registeredUser ? <div>Registered: {registeredUser}</div> : ''}
    </div>
  );
}
