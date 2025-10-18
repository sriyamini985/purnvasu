import InventoryImg from "../image/Inventory.jpg";
import MenuImg from "../image/Menu.jpg";
import FinancialImg from "../image/Financial.jpg";
import OrdersImg from "../image/Orders.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container-">
      <div className="content-">
        <h2>
          <span className="green-text-">Simplifying restaurant management,</span>
          <br />
          one click at a time
        </h2>

        <div className="cards-">
          <div className="card-">
            <img src={MenuImg} alt="MenuIcon" />
            <h3>Menu</h3>
            <p>Keep dishes, categories, and promotions updated.</p>
            <button>Open</button>
          </div>

          <div className="card-">
            <img src={FinancialImg} alt="Financial" />
            <h3>Financial</h3>
            <p>Handle transactions, generate bills, and access reports.</p>
            <button>Open</button>
          </div>

          <div className="card-">
            <img src={OrdersImg} alt="Orders" />
            <h3>Orders</h3>
            <p>Track live orders and view history in real time.</p>
            <button>Open</button>
          </div>

          <div className="card-">
            <img src={InventoryImg} alt="Inventory" />
            <h3>Inventory</h3>
            <p>Monitor stock levels and receive low-stock alerts.</p>
            <button>Open</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
