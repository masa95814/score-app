import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
// import ENV from './env.json';

// const config = {
//   apiKey:            ENV.FIREBASE_API_KEY,
//   authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
//   databaseURL:       ENV.FIREBASE_DB_URL,
//   projectId:         ENV.FIREBASE_PRJ_ID,
//   storageBucket:     ENV.FIREBASE_STRAGE,
//   messagingSenderId: ENV.FIREBASE_SENDER_ID,
//   appId: ENV.FIREBASE_APP_ID,
//   measurementId: ENV.FIREBASE_MEASUREMENT_ID,
// };

// Initialize Firebase
// firebase.initializeApp(config);
// firebase.analytics();

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
