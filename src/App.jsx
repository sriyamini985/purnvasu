import React from 'react';
import Header from './components/header';
import Ordermanagep2 from './components/order_management_p2';
import FooterDesign from './components/footer-design';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return(
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Ordermanagep2 />} />
        <Route path="/orders" element={<Ordermanagep2 />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <FooterDesign />
    </Router>
  );
}

export default App;