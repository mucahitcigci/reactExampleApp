import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <ul className="footerUl">
          <li>
            <a href={"/contact"}> Contact </a>
          </li>
          <li>
            <a href={"/"}> Home</a>
          </li>
          <li>
            <a href={"/about"}> About Us </a>
          </li>
          <li>
            <a href={"/contact"}> Contact </a>
          </li>
          <li>
            <a href={"/profiles"}> Profiles </a>
          </li>
          <li>
            <a href={"/"}> Home</a>
          </li>
          <li>
            <a href={"/about"}> About Us </a>
          </li>

          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              dicta explicabo magnam? Veritatis corporis vero quia adipisci
              corrupti asperiores fuga nostrum doloribus veniam at. Totam
              suscipit ut sapiente tempore quidem.
            </p>{" "}
          </li>
        </ul>
        <div> </div>
      </div>

      <div className="copyright">
        <p> &copy; {new Date().getFullYear()} Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
