import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import globalStore from "./Data/data"
import store from "./Data/redux/store"
//import defaultAvatar from "./img/avatar.png"

let root = ReactDOM.createRoot(
  document.getElementById('root')
);

//const root = ReactDOM.createRoot(document.getElementById('root'));
function render(state){
  root.render(
    <App postData={state} dispatch={store.dispatch.bind(store)}/> );
}

let state = store.getState();

render(state);

store.subscribe(()=>{
  let state = store.getState();
  render(state);
});

