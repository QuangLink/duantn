import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import React from "react";
import { AuthContextProvider } from "./context/AuthContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {

    
    return (
      <div className="App">
        <AuthContextProvider>
          <Navbar />
          <AllRoutes />
          <Footer />
        </AuthContextProvider>
      </div>
    );
  }
}

export default App;
