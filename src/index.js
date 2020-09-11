import firebase from 'firebase';
import {firebaseConfig} from "firebase/firebase-config";
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import App from "./App";


firebase.initializeApp(firebaseConfig);


render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


