import React from "react";
import Cards from "../components/Cards";
import Colors from "../components/Colors";

import Slider from "../components/Slider";
const Home = () => {
  return (
    <div className="container">
      <Slider />
      <Cards />
      <h1 id="lorem">Merhaba</h1>
      <Colors />
    </div>
  );
};

export { Home };
