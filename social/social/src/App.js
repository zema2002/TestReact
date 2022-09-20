import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Content/>
    </div>
  );
}

export default App;
