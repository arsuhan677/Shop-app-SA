import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Cart from "./components/Products/Cart.jsx";
import Fotter from "./components/Header/Footter.jsx";
import Header from "./components/Header/Header.jsx";
// import All from "./components/Products/All.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
      <Fotter />
  </BrowserRouter>
);
