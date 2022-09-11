import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

const  App = () => {
  return (
    <div className="App">
      <Header/>
      <Technologies/>
    </div>
  );
}

const Technologies = () => {
  return(
    <ul>
      <li>css</li>
      <li>js</li>
      <li>react</li>
    </ul>
  )
}
const  Header = () => {
  return (
    <div className="App">
      
        <a href="#">first </a>
        <a href="#">second </a>
        <a href="#">third </a>
      
    </div>
  );
}

export default App;
