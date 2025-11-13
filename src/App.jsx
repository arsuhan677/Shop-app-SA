import "./App.css";
import HomeCard from "./Home/HomeCard";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <Header />

      <HomeCard count={count} />
      <Products count={count} setCount={setCount} />
    </div>
  );
}

export default App;
