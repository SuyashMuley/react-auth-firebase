import './App.css';
import React from 'react';
import firebaseConfig from './firebaseConfig';
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import Home from './Home';

class App extends React.Component {
  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "https://calculator-qgnbku7zp-suyashmuley.vercel.app", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "https://calculator-qgnbku7zp-suyashmuley.vercel.app/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}

export default App;