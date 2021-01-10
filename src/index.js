import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC37kOfKYcmMtQ1_y4CeUS-cvrT0M0B2lI",
  authDomain: "scoreapp-444f4.firebaseapp.com",
  databaseURL: "https://scoreapp-444f4.firebaseio.com",
  projectId: "scoreapp-444f4",
  storageBucket: "scoreapp-444f4.appspot.com",
  messagingSenderId: "197374940798",
  appId: "1:197374940798:web:b7ae984d05a901ea996a2f",
  measurementId: "G-XJ6YPG1CNC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
