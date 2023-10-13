import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse:""};
  }

callAPI(){
  fetch("http://localhost:9000")
  .then(res => res.text())
  .then(res => this.setState({apiResponse:res}));
}
  componentWillMount() {
    this.callAPI();
}
render() {
  
  return (
    <div className="App">

      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
   
  );
}
}
export default App;
