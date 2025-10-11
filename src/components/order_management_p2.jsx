import './order_management_p2.css';
function Ordermanagep2(){
    return(
      <div className="order-management-main">
        <main>
          <button className="back-btn">Back</button>
          <h1 className="main-heading">Order Management</h1>
          <div className="main-content">
            <div className="left-section">
              <div className="card1 card">
                <h2 className="card-title">Total Orders:</h2>
                <h1 className="card-data">4</h1>
              </div>
              <div className="card2 card">
                <h2 className="card-title">Active Orders:</h2>
                <h1 className="card-data">3</h1>
              </div>
              <div className="card3 card">
                <h2 className="card-title">Completed Orders:</h2>
                <h1 className="card-data">1</h1>
              </div>
            </div>
            <div className="right-section">
              <div className="right-section1">
                <span><h1>Completed</h1></span>
                <span><input type="text" id="search" name="search" placeholder="Search"/></span>
              </div>
              <div className="right-section-table">
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
}
export default Ordermanagep2;