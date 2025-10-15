import React from 'react';
import './Promotion.css';

const Promotion = () => {
  return (
    <div>
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

      <button className="back-btn">Back</button>
      <div className="white-box">
        <h3 className="box-heading">CREATE POP AD</h3><br />

        <div className="content">
          <div className="left-half-box">
            <div className="image">
              <img src="/WhatsApp Image 2025-10-13 at 20.08.21_3331c644.jpg" alt="Advertisement" height="100px" width="100px" />
            </div>
            <div className="text">
              <h2>upload</h2>
            </div>
            <h2 className="text1">advertisement</h2>
            <h2 className="text2">picture</h2>
          </div>

          <div className="right-half-box">
            <form className="form">
              <label>Caption</label>
              <input type="text" placeholder="Enter Caption (if any)" /><br />

              <label>Description</label>
              <textarea placeholder="Enter Description (if any)"></textarea>

              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
