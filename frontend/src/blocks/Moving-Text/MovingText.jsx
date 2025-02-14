import React from "react";
import "./MovingText.css";

const MovingText = () => {
  return (
    <div id="moving-text">
      <div className="moving-wrapper">

        <div className="moving-container">
          <h1> CREATE</h1>
          <div className="circle"></div>
          <h1> ORGANIZE</h1>
          <div className="circle"></div>
          <h1>PRODUCTIVE</h1>
          <div className="circle"></div>
          <h1> CREATE</h1>
          <div className="circle"></div>
          <h1>ORGANIZE</h1>
          <div className="circle"></div>
          <h1>PRODUCTIVE</h1>
          <div className="circle"></div>
        </div>
        {/* Duplicate ORGANIZE for seamless looping */}
        <div className="moving-container">
          <h1>CREATE</h1>
          <div className="circle"></div>
          <h1>ORGANIZE</h1>
          <div className="circle"></div>
          <h1>PRODUCTIVE</h1>
          <div className="circle"></div>
          <h1>CREATE</h1>
          <div className="circle"></div>
          <h1>ORGANIZE</h1>
          <div className="circle"></div>
          <h1>PRODUCTIVE</h1>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
