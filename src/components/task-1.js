import React from "react";
import './task-1.css';
function Task(){
    return(
        <div className="container">
            <h1>Sivateja</h1>
            <h2>12345</h2>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email..."/>
            <button type="submit">Submit</button>
        </div>
    )
};
export default Task;