import React, { useState } from 'react';
import './App.css';
import MenuManagement from './components/MenuManagement';
// import PieChartComponent from './PieChartComponent';


function App() {
  const [activePage, setActivePage] = useState('menu'); 

  return (
    <div className="App">
      
      {/* <div className="top-bar">
        <div className="icons-container">
          <div className="icon-center">
            <div className="icon-placeholder"></div>
            <h3>XYZ Restaurant</h3>
            <h1 className="main-heading">
              {activePage === 'menu' ? 'Menu Management' : 'Financial Management'}
            </h1>

            <div className="buttons-container">
              
              <button
                className={`red-button ${activePage === 'menu' ? 'active' : ''}`}
                onClick={() => setActivePage('menu')}
              >
                MENU MANAGEMENT
              </button>
              <button
                className={`red-button ${activePage === 'finance' ? 'active' : ''}`}
                onClick={() => setActivePage('finance')}
              >
                FINANCIAL MANAGEMENT
              </button>
            </div>
          </div>

          <div className="icon-left">
            <div className="icon-placeholder"></div>
            <h5 className="green-heading">
              OrderIn <br />
              PurnVasu Tech Solutions
            </h5>
          </div>
        </div>
        <button className="back-button">Back</button>
      </div> */}

      {/* Page Content */}
      <div className="main-content">
        {activePage === 'menu' ? (
          <MenuManagement />
        ) : (
          <div className="main-box">
            <div className="inner-box">
              {/* <PieChartComponent /> */}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default App;
