import React, { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import Navbar from "./Components/Navbar";
import useScrollListener from "./Components/useScroll";



const App = () => {
  return (
    <div className="App"  >
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
