import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Technology from './Pages/Technology';
import Contact from './Pages/Contact';
import Nero from './Pages/Nero';
import Bubble from './Pages/Bubble';
import Drizzle from './Pages/Drizzle';
import Thunder from './Pages/Thunder';
import Airwell from './Pages/Airwell';



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nero" element={<Nero />} />
          <Route path="/bubble" element={<Bubble />} />
          <Route path="/drizzle" element={<Drizzle />} />
          <Route path="/thunder" element={<Thunder />} />
          <Route path="/airwell" element={<Airwell />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
