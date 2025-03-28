import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Navbar /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
