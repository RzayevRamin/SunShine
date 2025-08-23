import React, { useState } from "react";
import "./NavBar.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavBar({ icecreams, currentIceIndex, pizzas, currentPizzIndex, activeCarousel, setActiveCarousel }) {
  const transitionConfig = { duration: 0.6, ease: "easeInOut" };

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handlePizzaClick = () => {
    handleNavigate("/pizza");
    setActiveCarousel("pizza");
  };

  const handleIcecreamClick = () => {
    handleNavigate("/icecream");
    setActiveCarousel("icecream");
  };

  const safeIceIndex = typeof currentIceIndex === "number" && currentIceIndex >= 0 && currentIceIndex < icecreams.length
  ? currentIceIndex
  : 0;

const safePizzIndex = typeof currentPizzIndex === "number" && currentPizzIndex >= 0 && currentPizzIndex < pizzas.length
  ? currentPizzIndex
  : 0;

  const currentIndex = activeCarousel === "icecream" ? safeIceIndex : safePizzIndex;
  const currentColor = activeCarousel === "icecream" ? icecreams[safeIceIndex].fontColor : pizzas[safePizzIndex].bgColor;


  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="navBarContainer">
      <div className="companyNameBox">
        <motion.h1
          key={currentIndex}
          initial={{ color: currentColor }}
          animate={{ color: currentColor }}
          transition={transitionConfig}
        >
          SunShine
        </motion.h1>
      </div>
      <div className="navigationBarBox">
        <ul id="navList">
          <li className="navListItems">
            <button className="navButtons">Home</button>
          </li>
          <li className="navListItems">
            <button
              className="navButtons"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Menu
            </button>
            {isOpen && (
              <motion.ul className="subMenu"
              key={currentIndex}
          initial={{ backgroundColor: currentColor }}
          animate={{ backgroundColor: currentColor }}
          transition={transitionConfig}>
                <li>
                  <button onClick={() => handleIcecreamClick()}>
                    Ice cream
                  </button>
                </li>
                <li>
                  <button onClick={() => handlePizzaClick()}>
                    Pizza
                  </button>
                </li>
              </motion.ul>
            )}
          </li>
          <li className="navListItems">
            <button className="navButtons">Our Story</button>
          </li>
          <li className="navListItems">
            <button className="navButtons">About us</button>
          </li>
          <li className="navListItems">
            <button className="navButtons">Contact us</button>
          </li>
        </ul>
      </div>
      <div className="userAndLanguageBox">
        <div className="languageBox">
          <select name="language" id="languageSelect">
            <option className="languageOptions" value="eng">
              ENG
            </option>
            <option className="languageOptions" value="aze">
              AZE
            </option>
            <option className="languageOptions" value="rus">
              RUS
            </option>
          </select>
        </div>
        <div className="userBox">
          <button className="userButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
            >
              <path
                d="M1 19V17.875C1 15.7864 1.79018 13.7834 3.1967 12.3065C4.60322 10.8297 6.51088 10 8.5 10M8.5 10C10.4891 10 12.3968 10.8297 13.8033 12.3065C15.2098 13.7834 16 15.7864 16 17.875V19M8.5 10C9.63664 10 10.7267 9.52589 11.5305 8.68198C12.3342 7.83807 12.7857 6.69347 12.7857 5.5C12.7857 4.30653 12.3342 3.16193 11.5305 2.31802C10.7267 1.47411 9.63664 1 8.5 1C7.36336 1 6.27327 1.47411 5.46954 2.31802C4.66581 3.16193 4.21429 4.30653 4.21429 5.5C4.21429 6.69347 4.66581 7.83807 5.46954 8.68198C6.27327 9.52589 7.36336 10 8.5 10Z"
                stroke="#262424"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
