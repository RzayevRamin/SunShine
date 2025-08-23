import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Reset.css";
import "./App.css";
import Header from "./Components/Header/Header";
import IcecreamCarousel from "./Components/Header/IcecreamCarousel/IcecreamCarousel";
import PizzaCarousel from "./Components/Header/PizzaCarousel/PizzaCarousel";
import { icecreams } from "../src/Components/Header/icecreamsData";
import { pizzas } from "./Components/Header/pizzaData";

function App() {
  const [currentIceIndex, setCurrentIceIndex] = useState(0);
  const [currentPizzIndex, setCurrentPizzIndex] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState("icecream");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Header
            icecreams={icecreams}
            pizzas={pizzas}
            currentIceIndex={currentIceIndex}
            setCurrentIceIndex={setCurrentIceIndex}
            currentPizzIndex={currentPizzIndex}
            setCurrentPizzIndex={setCurrentPizzIndex}
            activeCarousel={activeCarousel}
            setActiveCarousel={setActiveCarousel}
          />
        }
      >
        <Route
          index
          element={
            <IcecreamCarousel
              icecreams={icecreams}
              currentIceIndex={currentIceIndex}
            setCurrentIceIndex={setCurrentIceIndex}
            />
          }
        />
        <Route
          path="icecream"
          element={
            <IcecreamCarousel
              icecreams={icecreams}
              currentIceIndex={currentIceIndex}
            setCurrentIceIndex={setCurrentIceIndex}
            />
          }
        />
        <Route
          path="pizza"
          element={
            <PizzaCarousel
              pizzas={pizzas}
              currentPizzIndex={currentPizzIndex}
            setCurrentPizzIndex={setCurrentPizzIndex}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
