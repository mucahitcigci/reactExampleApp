import React from "react";
import "./About.css";
import pic from "../images/aboutPic.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiMailSend } from "react-icons/bi";
function About() {
  return (
    <div>
      <h1>About Us </h1>
      <div className="container">
        <div className="row">
          <div className="col leftSide">
            <img src={pic} alt="" />
            <h2> Mücahİt ÇIğcİ</h2>
            <p>Front-End Web Developer</p>
            <h2>About Me</h2>
            <p>
              <span>
                My career planning, frontend in the Web field I designed it as a
                developer. The first rule of a successful life is the right
                time. is to manage. With this motto my personal skills in the
                developing world I continue to work to increase it. In order to
                educate myself in the web field, I have many in these trainings
                with my research that I have gained competence and continue to
                do so I should point out. Algorithm to success designs and in
                line with this design I'm moving forward. Innovative, skills and
                processes continuous improvement oriented, enthusiastic,
                durable, compatible, collaborative, prone to teamwork and i am
                smiling.
              </span>
            </p>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="https://mucahitcigci.com" target="_blank">
                  {" "}
                  <CgWebsite className="icn" /> https://mucahitcigci
                </a>
              </li>
              <li>
                <AiOutlinePhone className="icn" />{" "}
                <a href="tel:+905449457677">05449457677</a>
              </li>
              <li>
                <BiMailSend className="icn" />{" "}
                <a href="mailto:cmucayit@gmail.com">cmucayit@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col rightSide">s</div>
        </div>
      </div>
    </div>
  );
}
export { About };
