import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let PLAYERS = [
  {
    name: "Jason",
    score: 31,
    id: 1    //giving each player an id helps the loop in React, map out which player goes in to which virtual DOM (in the case of having to reorder the list of players)
  },
  {
    name: "Andrew",
    score: 25,
    id: 2
  },
  {
    name: "Alina",
    score: 50,
    id: 3
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App initialPlayers={PLAYERS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

document.title = 'PochaScore'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
