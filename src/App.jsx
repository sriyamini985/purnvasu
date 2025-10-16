import React from 'react';
import Welcomepage from './pages/Welcomepage';
import Menupage from './pages/Menupage';
import Financepage from './pages/Financepage';
import Inventorypage from './pages/Inventorypage';

function App() {
  return (
    <div>
      <Welcomepage />
      <Menupage />
      <Financepage />
      <Inventorypage />
    </div>
  );
}

export default App;