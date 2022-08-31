import './App.css';
import Data from './Data';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Register />
      <hr />
      <Login />
      <hr />
      <Data />
    </div>
  );
}

export default App;
