import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';






function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Content postData={props.postData} dispatch={props.dispatch}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
