import "./App.css";
import HomeCard from "./Home/HomeCard";
import Products from "./components/Products/Products";
// import Header from "./components/Header/Header";
import { useState } from "react";
import Fotter from "./components/Header/Footter";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      {/* <Header /> */}

      <HomeCard count={count} />
      <Products count={count} setCount={setCount} />
      <div className="mt-20">
        {/* <Fotter /> */}
      </div>
    </div>
  );
}

export default App;
