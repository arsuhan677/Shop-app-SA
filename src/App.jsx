// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import HomeCard from "./components/HomeCard";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Header />

      <HomeCard />
      <Products />
    </div>
  );
}

export default App;
