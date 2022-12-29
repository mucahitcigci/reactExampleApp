import React from "react";
import "./colors.css";

function Colors() {
  function change(e) {
    const element = document.getElementById("content");
    element.style.backgroundColor = e;
    const label = document.getElementById("label");
    label.style.backgroundColor = e;
  }
  return (
    <div className="allColor" id="content">
      <div className="wrapper">
        <div className="holder">
          <label htmlFor="color" className="colorLabel" id="label">
            <div className="icon">Choose Color </div>
          </label>
          <input
            className="colorInput"
            type="color"
            id="color"
            onChange={(e) => change(e.target.value)}
          />
        </div>
      </div>
      <footer>
        <span style={{ color: "red" }}></span>
      </footer>
    </div>
  );
}
export default Colors;
