import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Menu from './Menu/Menu';

function App() {

  const [count, setCount] = useState(0);

  function action() {
    setCount(count + 1);
    alert("My count is " + count);
  }

  return (
    <div className="App">
      <Menu/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <MyButton count={count} onClick={action} name="1"/>
        <MyButton count={count} onClick={action} name="2"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyButton({count, onClick, name}) {
  const user = {
    name: 'Bryan'
  };

  let products = [
    {title: 'Apple', id: 1},
    {title: 'Pear', id: 2}
  ];
  

  return (
    <button className="avatar" onClick={onClick}>Im a button with {name} and count of {count}</button>
  );
}

export default App;
