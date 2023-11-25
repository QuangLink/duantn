import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Add event listener for location change
    window.addEventListener("popstate", handleLocationChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []); // Run effect only once on component mount

  const isAdminRoute = currentPath.includes("/admin");
  console.log("isAdminRoute:", isAdminRoute);
  console.log("Current path:", currentPath);

  return (
    <div className="App">
      <AuthContextProvider>
        {!isAdminRoute && <Navbar />}
      <AllRoutes />
        {!isAdminRoute && <Footer />}
      </AuthContextProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
