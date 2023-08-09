// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
