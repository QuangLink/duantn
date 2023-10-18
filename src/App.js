import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    const footerStyle = {
      position: "relative",
      marginTop:"150px",
      bottom: 0,
      left: 0,
      width: "100%"
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
