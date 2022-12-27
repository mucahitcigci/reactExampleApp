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
          <div className="col-sm-4 leftSide">
            <img src={pic} alt="" />
            <h2> Mücahİt ÇIğcİ</h2>
            <h5>Front-End Web Developer</h5>
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
                  <CgWebsite /> https://mucahitcigci
                </a>
              </li>
              <li>
                <a href="tel:+905449457677">
                  <AiOutlinePhone /> 05449457677
                </a>
              </li>
              <li>
                <a href="mailto:cmucayit@gmail.com">
                  <BiMailSend /> cmucayit@gmail.com
                </a>
              </li>
            </ul>
            <h2>Skils</h2>
            <p>
              React Js, Express Js, Java, JavaScript, Git, Github, Google Cloud
              Technologies, HTML, CSS, Bootstrap, Tailwind, Android Studio,
              Kotlin, Redux, PHP, MySQL, Python, C#, Adobe XD
            </p>
            <h2>Social Media</h2>
            <p>
              <a
                href="https://www.linkedin.com/in/mucahitcigci/"
                target="_blank"
              >
                {" "}
                <CgWebsite className="iconStyleCV" />
              </a>
              <a href="tel:+905449457677">
                <AiOutlinePhone className="iconStyleCV" />
              </a>
              <a href="mailto:cmucayit@gmail.com">
                <BiMailSend className="iconStyleCV" />
              </a>{" "}
            </p>
          </div>
          <div className="col-sm-8 rightSide">
            <h2>work experience</h2> <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
export { About };
