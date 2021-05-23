import React from "react";
import MainScreen from "./screens/MainScreen";
import { DataProvider } from "./store/GlobalState";
import firebase from "firebase";
import { firebaseConfig } from "./firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const App = () => {
  return (
    <DataProvider>
      <MainScreen />
    </DataProvider>
  );
};

export default App;
