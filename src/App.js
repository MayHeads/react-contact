import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Profile1 from './detail/one';

function App() {
  const [state, setState] = useState(0)
  function clickAction() {
    console.log('clicked');
    console.log(' onyou can give me a good student')
    setState(state + 1)
  }
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className='App-pos'>
          Edit <code>src/App.js</code> and save to reload.  auto refresh result name you can give me a good  studned
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> you have press {state} times </p>
        <p> you have press {state} times </p>

        <div className='App-box'>
          <p> you have press {state} times </p>

        </div>
        <MyButton/>
        <button className='App-button' onClick={clickAction}> 点击 </button>
        <Profile1/>
      {/* </header> */}
    </div>
  );
}

function MyButton() {
  return (
    <button className='App-button'> Another Button </button>
  )
}

export default App;
