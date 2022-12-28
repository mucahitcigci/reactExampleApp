import React from "react";
import "./footer.css";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="footerUl">
                <li>
                  {" "}
                  <p>
                    <strong>Description</strong>
                  </p>
                  <p>
                    {" "}
                    My career planning, frontend in the Web field I designed it
                    as a developer. The first rule of a successful life is the
                    right time. is to manage. With this motto my personal skills
                    in the developing world I continue to work to increase it.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="footerUl">
                <li>
                  <p>
                    <strong>Navigation</strong>
                  </p>
                  <a href={"/"}> Home</a>
                </li>
                <li>
                  <a href={"/about"}>About Us </a>
                </li>
                <li>
                  <a href={"/contact"}> Contact </a>
                </li>
                <li>
                  <a href={"/profiles"}> Profiles </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="footerUl">
                <li>
                  <p>
                    <strong>Social Media</strong>
                  </p>
                  <div>
                    <a className="iconStyle">
                      <AiOutlineInstagram />{" "}
                    </a>{" "}
                    <a className="iconStyle">
                      {" "}
                      <AiOutlineTwitter />{" "}
                    </a>
                    <a className="iconStyle">
                      <AiOutlineLinkedin />
                    </a>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          {" "}
          &copy; {new Date().getFullYear()} Copyright . With by Mücahit ÇIĞCİ
        </p>
      </div>
    </div>
  );
};

export default Footer;
