import React from 'react';
import './OrderManagement.css';

// You can replace these with actual icon components (e.g., from react-icons)
const SquareIcon = () => <div className="placeholder-icon"></div>;
const Logo = () => <div className="placeholder-logo">OOO</div>;
const SearchIcon = () => <span className="search-icon">🔍</span>;


const OrderManagement = () => {
  return (
    <div className="order-management-page">
      {/* Top Header */}
      <header className="main-header">
        <div className="logo-area">
          <Logo />
          <div className="logo-text">
            <span>line=text</span>
            <span>icon</span>
          </div>
        </div>
        <div className="header-icons">
          <SquareIcon />
          <SquareIcon />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <button className="back-button">&lt; back</button>
          <div className="summary-card">
            <p>Total</p>
            <p className="summary-number">4</p>
          </div>
          <div className="summary-card">
            <p>Active</p>
            <p className="summary-number">3</p>
          </div>
          <div className="summary-card">
            <p>Completed</p>
            <p className="summary-number">1</p>
          </div>
        </aside>

        {/* Right Content */}
        <section className="order-details-section">
          <h1>Order Management</h1>
          <div className="section-header">
            <h2>Completed</h2>
            <div className="search-container">
              <input type="text" placeholder="Search" />
              <SearchIcon />
            </div>
          </div>

          {/* Orders Table */}
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>ABCD</th>
                <th>Item</th>
                <th>Special</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ORD-001</td>
                <td>
                  Sham <br /> table-3
                </td>
                <td>
                  1X Pizza <br /> X Desert
                </td>
                <td>Extra Straw</td>
                <td><input type="checkbox" defaultChecked /></td>
                <td>3:00</td>
              </tr>
              <tr>
                <td>ORD-002</td>
                <td>
                  Siva <br /> table-2
                </td>
                <td>
                  1 coffe <br /> 1 cookie
                </td>
                <td>Extra Sugar</td>
                <td><input type="checkbox" defaultChecked /></td>
                <td>4:00</td>
              </tr>
              {/* Add more order rows here */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default OrderManagement;