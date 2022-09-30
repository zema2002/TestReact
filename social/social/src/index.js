import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import globalStore from "./Data/data"
import defaultAvatar from "./img/avatar.png"

let root = ReactDOM.createRoot(
  document.getElementById('root')
);

//const root = ReactDOM.createRoot(document.getElementById('root'));
function render(){
  root.render(
    <App postData={globalStore.getState()} addPost={globalStore.addPost.bind(globalStore)} updatePostText={globalStore.updatePostText.bind(globalStore)}/> );
}

render();

globalStore.subscribe(render);

