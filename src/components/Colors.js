import React from "react";
import "./colors.css";
function Colors() {
  return (
    <div className="allColor">
      <div className="wrapper">
        <div className="holder">
          <label htmlFor="color">
            <div className="icon">
              <i className="fa-solid fa-palette"></i>
            </div>
          </label>
          <input type="color" id="color" />
        </div>
      </div>
      <footer>
        <span style={{ color: "red" }}></span>
      </footer>
    </div>
  );
}
export default Colors;
