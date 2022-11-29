import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div className="mt-4 mb-4">
      {/* ************************** */}

      <Carousel fade>
        <Carousel.Item>
          <img
            width={900}
            height={400}
            className="d-block w-100"
            src="https://picsum.photos/id/2/1600/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Well Come To My Example</h1>
            <button className="btn btn-success">
              <a
                href="#lorem"
                className="btn btn-default"
                style={{ color: "white" }}
              >
                {" "}
                Get Started
              </a>
            </button>{" "}
            <button className="btn btn-outline-info">
              <a
                href="#lorem"
                className="btn btn-default"
                style={{ color: "white" }}
              >
                {" "}
                Contact Us
              </a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={400}
            className="d-block w-100"
            src="https://picsum.photos/id/7/1600/400"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Well Come To My Slider</h3>
            <button className="btn btn-success">
              <a
                href="#lorem"
                className="btn btn-default"
                style={{ color: "white" }}
              >
                {" "}
                Get Started
              </a>
            </button>{" "}
            <button className="btn btn-outline-info">
              <a
                href="#lorem"
                className="btn btn-default"
                style={{ color: "white" }}
              >
                {" "}
                Contact Us
              </a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={400}
            className="d-block w-100"
            src="https://picsum.photos/id/27/1600/400"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Well Come To My Slider Example</h3>
            <button className="btn btn-success">
              <a
                href="#lorem"
                className="btn btn-default"
                style={{ color: "white" }}
              >
                {" "}
                Get Started
              </a>
            </button>{" "}
            <button className="btn btn-outline-info">
              <a
                href="#lorem"
                className="btn btn-default"
                style={{ color: "white" }}
              >
                {" "}
                Contact Us
              </a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
