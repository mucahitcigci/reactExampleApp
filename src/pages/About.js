import React from "react";
import "./About.css";
import pic from "../images/aboutPic.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiMailSend } from "react-icons/bi";
function About() {
  return (
    <div>
      <h1 className="sections">About Us </h1>
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
            <h2>FULL STACK WEB DEVELOPER</h2>
            <h3>Freelance | March 2018 - Currently</h3>
            <ul>
              <li>
                Sending the document prepared for the work to be done to the
                customer, and shape the process if it approves
              </li>
              <li>Presentation of UI design and coding of the Frontend,</li>
              <li>
                Creating the database, coding the backend part Testing,
                evaluating and delivering to the customer.
              </li>
              <li>
                Technologies I use; Adobe XD, HTML, CSS (Bootstrap), JavaScript,
                ReactJs, ExpressJs, PHP, MYSQL
              </li>
            </ul>
            <h2>Wordpress Web Content Editor</h2>
            <h3>Freelance | March 2020 - Currently</h3>
            <ul>
              <li>
                E-Commerce, Personal Blog, Company Introduction. The customer
                wants the theme given To revise accordingly, Content management.
                Some plugins I use; Yoast SEO, WooCommerce, Jetpack, Google
                Analytics Dashboard for WP (GADWP)
              </li>
            </ul>
            <h2>Founder & Editor</h2>
            <h3>Kulbe-ı Ahzan E-Journal | March 2020 - 2022</h3>
            <ul>
              <li>
                E-Journal where I wrote the Frontend and Backend part, We have
                been active for two years with a team of 6 people and 20+
                authors, I was taking care of the updating and managing part. I
                was fixing the errors that may occur in the Frontend and Backend
                parts. Technologies I Use; HTML, CSS, JavaScript, PHP, MySQL,
                Google Analytics, Google Search Console
              </li>
            </ul>
            <h2>TEACHING INTERNSHIP</h2>
            <h3>
              Kadıköy Vocational and Technical Anatolian High School | February
              2020 - May 2020
            </h3>
            <ul>
              <li>
                Intern in object-oriented programming and web design courses I
                taught as a teacher. In line with goals and achievements It was
                a productive and enjoyable experience.
              </li>
            </ul>
            <h2>education</h2> <hr />
            <h3>MARMARA UNIVERSITY ATATURK EDUCATION FACULTY</h3>
            <p>Computerized Instructional Technologies Instructor</p>
            <h3>UNIVERSITY OF ISTANBUL ODEF</h3>
            <p>Siyaset Bilimi ve Uluslararası İlişkiler</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { About };
