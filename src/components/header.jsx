import React from "react";
import './header.css';
function Header()
{
    return(
        <div className="header-container">
            <div className="header-sub1">
                <div className="header-sub1-logo"></div>
                <div>
                    <h4>OrderIn</h4>
                    <h4>By PurnVasu Tech Solutions</h4>
                </div>
            </div>


            <div className="header-sub2">
                <div className="header-mid-logo">Logo</div>
                <div className="restaurant-name"><h1>XYZ Restaurant</h1></div>
             </div>


             <div className="header-sub3 ">
                <div className="header-icon divs"></div>
                <div className="header-icon divs"></div>
             </div>


        </div>
    );
};
    export default Header;
