import React from 'react';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import Navigator from './Navigator';

export default function App() {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyD6nL2o-F--grKQr8mb63Ys84ZIYRCD_Jo",
    authDomain: "intercambiosfacilitos-c5a6e.firebaseapp.com",
    databaseURL: "https://intercambiosfacilitos-c5a6e.firebaseio.com",
    projectId: "intercambiosfacilitos-c5a6e",
    storageBucket: "intercambiosfacilitos-c5a6e.appspot.com",
    messagingSenderId: "927819177209",
    appId: "1:927819177209:web:215f12910e8f5cb7ffd628",
    measurementId: "G-PWPZPRVB4E"
  };

  firebase.initializeApp(firebaseConfig);
  
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
