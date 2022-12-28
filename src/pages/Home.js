import React from "react";
import Cards from "../components/Cards";
import Colors from "../components/Colors";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="container">
        <Cards />
        <h1 id="lorem">DOM Manipulation</h1>
        <Colors />
      </div>
    </div>
  );
};

export { Home };
