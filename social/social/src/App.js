import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';






function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Content/>
      </div>
    </BrowserRouter>
  );
}

export default App;
