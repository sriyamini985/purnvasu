import React from 'react';
import './App.css';
import './index.css';
import CurveImg from './assets/Vector.png';

// import pages (ensure these files exist and export default the component)
import Welcomepage from './pages/Welcomepage';
import Financepage from './pages/Financepage';
import Inventorypage from './pages/Inventorypage';
import Menupage from './pages/menupage';

function App() {
  return (
    <div className="app-root">
      <Welcomepage />
       
    
      <img src={CurveImg} alt="curve" style={{ display: 'none' }} />
    </div>
  );
}

export default App;