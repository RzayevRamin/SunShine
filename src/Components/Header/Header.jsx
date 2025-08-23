import React from "react";
import "./Header.css";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

function Header({ icecreams, currentIceIndex, setCurrentIceIndex, currentPizzIndex, setCurrentPizzIndex, pizzas, activeCarousel, setActiveCarousel }) {
  return (
    <div className="headerContainer">
      <NavBar
        icecreams={icecreams}
        currentIndex={currentIceIndex}
        setCurrentIndex={setCurrentIceIndex}
        pizzas={pizzas}
          currentPizzIndex={currentPizzIndex}
          setCurrentPizzIndex={setCurrentPizzIndex}
        activeCarousel={activeCarousel}
        setActiveCarousel={setActiveCarousel}
      />
      <main>
        <Outlet context={{ icecreams, currentIceIndex, setCurrentIceIndex, pizzas, currentPizzIndex, setCurrentPizzIndex }} />
      </main>
    </div>
  );
}

export default Header;
