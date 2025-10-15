import React from "react";
import "./App.css"; // We'll move the CSS here

function pramotionpage() {
  return (
    <div className="App">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <div className="icon"></div>
          <h5>
            <span>
              OrderIn by
              <br />
              PurnVasu Tech Solutions
            </span>
          </h5>
        </div>
        <div className="top-center">
          <div className="icon"></div>
          <span>XYZ Restaurant</span>
        </div>
      </div>

      {/* Back Button */}
      <button className="back-btn">Back</button>

      {/* White Box */}
      <div className="white-box">
        <h3 className="box-heading">CREATE POP AD</h3>

        <div className="content">
          {/* Left Section */}
          <div className="left-half-box">
            <div className="image">
              <img
                src="WhatsApp Image 2025-10-13 at 20.08.21_3331c644.jpg"
                alt="Ad Preview"
                height="100px"
                width="100px"
              />
            </div>
            <div className="text">
              <h2>Upload</h2>
            </div>
            <h2 className="text1">Advertisement</h2>
            <h2 className="text2">Picture</h2>
          </div>

          {/* Right Section */}
          <div className="right-half-box">
            <form className="form">
              <label>Caption</label>
              <input type="text" placeholder="Enter Caption (if any)" />

              <label>Description</label>
              <textarea placeholder="Enter Description (if any)" />

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pramotionpage;
