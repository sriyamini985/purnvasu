import React from 'react';
import './menumanagement.css';
function MenuManagement() {
  return (
    <div>
      {/* <header>
        <div className="top-bar">
          <div className="top-left">
            <div className="icon"></div>
            <h5><span>OrderIn by<br />PurnVasu Tech Solutions</span></h5>
          </div>
          <div className="top-center">
            <div className="icon"></div>
            <span>XYZ Restaurant</span>
          </div>
        </div>
      </header> */}
      <main>
        <div className="buthead">
          <button className="backbutton"><b>Back</b></button>
          <h2 className="menu">Menu Management</h2>
        </div>
        <div className="button-container">
          <div className="leftbutton"><button>Category</button></div>
          <div className="rightbutton">
            <button>EDIT</button>
            <button>ADD</button>  
            <button>Create Promotions</button>
          </div>
        </div>
        <table>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Item image</th>
                <th>Price</th>
                <th>Promotions</th>
                <th>Availability</th>
                <th>Description</th>
                <th>Videos</th>
            </tr>
            <tr>
                <td>Rice</td>
                <td>Biryani</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/500px-%22Hyderabadi_Dum_Biryani%22.jpg" alt="oops" height="40px" width="60px" /></td>
                <td>$250</td>
                <td><div className="switch">
                         <input type="checkbox" id="check1" />
                         <label htmlFor="check1" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>Sandwich</td>
                <td>chicken burger</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/McD-McChicken_%28transparent%29.png/1024px-McD-McChicken_%28transparent%29.png" alt="oops" height="40px" width="60px" /></td>
                <td>$100</td>
                <td><div className="switch">
                         <input type="checkbox" id="check2" />
                         <label htmlFor="check2" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>Rice</td>
                <td>veg fried rice</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg/1200px-Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg" alt="oops" height="40px" width="60px" /></td>
                <td>$80</td>
                <td><div className="switch">
                         <input type="checkbox" id="check3" />
                         <label htmlFor="check3" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>starters</td>
                <td>chicken manchuria</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Chicken_Manchurian_%28Hyderabad_Style%29_%2811960049916%29.jpg/500px-Chicken_Manchurian_%28Hyderabad_Style%29_%2811960049916%29.jpg" alt="oops" height="40px" width="60px" /></td>
                <td>$120</td>
                <td><div className="switch">
                         <input type="checkbox" id="check4" />
                         <label htmlFor="check4" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>starters</td>
                <td>gobi manchuria</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Gobi_Manchurian.jpg/1200px-Gobi_Manchurian.jpg" alt="oops" height="40px" width="60px" /></td>
                <td>$100</td>
                <td><div className="switch">
                         <input type="checkbox" id="check5" />
                         <label htmlFor="check5" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>bevarages</td>
                <td>red velvet cake 1 pc</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Red_Velvet_Cake_Waldorf_Astoria.jpg/500px-Red_Velvet_Cake_Waldorf_Astoria.jpg" alt="oops" height="40px" width="60px" /></td>
                <td>$70</td>
                <td><div className="switch">
                         <input type="checkbox" id="check6" />
                         <label htmlFor="check6" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>rice</td>
                <td>spl dum biriyani</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/500px-Hyderabadi_Chicken_Biryani.jpg" alt="oops" height="40px" width="60px" /></td>
                <td>$300</td>
                <td><div className="switch">
                         <input type="checkbox" id="check7" />
                         <label htmlFor="check7" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>rice</td>
                <td>gobi rice</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzNTz3p512Ppyi4wVf0MzdcnMNGnWZDOAxDnu_xyQnPgjxIc&s" alt="oops" height="40px" width="60px" /></td>
                <td>$80</td>
                <td><div className="switch">
                         <input type="checkbox" id="check8" />
                         <label htmlFor="check8" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
            <tr>
                <td>beverages</td>
                <td>chocolate desert</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Chocolate_Fondant.jpg/500px-Chocolate_Fondant.jpg" alt="oops" height="40px" width="60px" /></td>
                <td>$99</td>
                <td><div className="switch">
                         <input type="checkbox" id="check9" />
                         <label htmlFor="check9" className="button"></label>
                    </div></td>
                <td>yes</td>
                <td>biryani with boiled egg </td>
                <td>xyz.mp4</td>
            </tr>
        </table>
      </main>
    </div>
  );
}

export default MenuManagement;
