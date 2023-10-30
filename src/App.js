import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnRR8HU4uAYN1r06P1PU-dvCuIsZiSUWQ",
  authDomain: "duantn-d151a.firebaseapp.com",
  projectId: "duantn-d151a",
  storageBucket: "duantn-d151a.appspot.com",
  messagingSenderId: "102449592921",
  appId: "1:102449592921:web:00c928b246a934a8eb0f48",
  measurementId: "G-003SXMMW7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    const footerStyle = {
      position: "relative",
      marginTop: "150px",
      bottom: 0,
      left: 0,
      width: "100%",
    };
    return (
      <div className="App">
        <Navbar />
        <AllRoutes />
        <Footer style={footerStyle} />
      </div>
    );
  }
}

export default App;
