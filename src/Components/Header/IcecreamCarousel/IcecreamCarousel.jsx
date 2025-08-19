import React, { useState, useRef } from "react";
import "./IcecreamCarousel.css";
import firstBGDecorator from "../../../assets/Background/Icecream/firstBGDecorator.png";
import lastBGDecorator from "../../../assets/Background/Icecream/lastBGDecorator.png";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function IcecreamCarousel({ icecreams, currentIndex, setCurrentIndex }) {
  const [isHover, setIsHover] = useState(false);
  const [direction, setDirection] = useState(0);
  const bgSliderRef = useRef(null);

  const transitionConfig = { duration: 0.6, ease: "easeInOut" };

  const variants = {
  enter: (direction) => ({
    x: direction > 0 ? window.innerWidth / 2 : -window.innerWidth / 2,
    y: direction > 0 ? -window.innerHeight / 2 : window.innerHeight / 2,
    opacity: 1,
    scale: 0.5,
    position: "absolute",
  }),
  center: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    position: "absolute",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -window.innerWidth / 2 : window.innerWidth / 2,
    y: direction > 0 ? window.innerHeight / 2 : -window.innerHeight / 2,
    scale: 0.5,
    opacity: 1,
    position: "absolute",
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
};

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === icecreams.length - 1 ? 0 : prev + 1));
    bgSliderRef.current.slickNext();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? icecreams.length - 1 : prev - 1));
    bgSliderRef.current.slickPrev();
  };

  return (
    <div className="icecreamCarouselContainer">
      <motion.div
        className="icecreamCarouselBox"
        animate={{ backgroundColor: icecreams[currentIndex].bgColor }}
        transition={transitionConfig}
      >
        <div className="firstBackgrountDecorator">
          <img src={firstBGDecorator} alt="First Decorator" />
        </div>
        <div className="icecreamContextBox">
          <AnimatePresence mode="wait">
            <motion.div
              key={icecreams[currentIndex].name + "-context"}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={transitionConfig}
            >
              <motion.h2
                style={{ color: icecreams[currentIndex].fontColor }}
                transition={transitionConfig}
              >
                The tastiest way to cool down
              </motion.h2>
              <motion.p transition={transitionConfig}>
                Whether it's a laugh-filled gathering with friends or a solitary
                break on a hot summer day... every flavor here is there to
                brighten your day.
              </motion.p>
              <motion.button
                key={icecreams[currentIndex].name + "-btn"}
                style={{
                  backgroundColor: isHover
                    ? "transparent"
                    : icecreams[currentIndex].fontColor,
                  color: isHover ? icecreams[currentIndex].fontColor : "white",
                  border: isHover
                    ? `1px solid ${icecreams[currentIndex].fontColor}`
                    : "none",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transitionConfig}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                Shop Now
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="icecreamBGAndSliderButtonBox">
          <div className="icecreamBGDecorator">
            <Slider
              asNavFor={null}
              slidesToShow={1}
              slidesToScroll={1}
              infinite={true}
              speed={600}
              arrows={false}
              swipe={false}
              ref={(slider) => (bgSliderRef.current = slider)}
            >
              {icecreams.map((icecreams, index) => (
                <div key={index}>
                  <img
                    src={icecreams.bg}
                    alt={icecreams.name}
                    className="icecreamBGSliderImg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="icecreamSliderButtonBox">
            <button className="icecreamSliderButton" onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="26"
                viewBox="0 0 19 26"
                fill="none"
              >
                <path
                  d="M18.7498 24.25L18.7498 1.75002C18.7491 1.52221 18.6862 1.29892 18.568 1.10417C18.4499 0.90942 18.2808 0.750587 18.0791 0.644772C17.8773 0.538954 17.6506 0.490158 17.4232 0.503635C17.1958 0.517115 16.9763 0.592358 16.7885 0.721264L0.538516 11.9713C-0.135234 12.4375 -0.135234 13.56 0.538516 14.0275L16.7885 25.2775C16.9759 25.4077 17.1955 25.4841 17.4233 25.4983C17.651 25.5125 17.8784 25.464 18.0805 25.3581C18.2827 25.2522 18.452 25.0929 18.5699 24.8976C18.6879 24.7022 18.7501 24.4782 18.7498 24.25ZM3.44602 13L16.2498 4.13502L16.2498 21.865L3.44602 13Z"
                  fill="black"
                />
              </svg>
            </button>
            <button className="icecreamSliderButton" onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="26"
                viewBox="0 0 19 26"
                fill="none"
              >
                <path
                  d="M0.250235 24.25L0.250235 1.75002C0.25095 1.52221 0.313778 1.29892 0.431957 1.10417C0.550137 0.90942 0.719191 0.750587 0.920925 0.644772C1.12266 0.538954 1.34944 0.490158 1.57684 0.503635C1.80424 0.517115 2.02366 0.592358 2.21148 0.721264L18.4615 11.9713C19.1352 12.4375 19.1352 13.56 18.4615 14.0275L2.21148 25.2775C2.02406 25.4077 1.80452 25.4841 1.57674 25.4983C1.34896 25.5125 1.12164 25.464 0.919476 25.3581C0.717314 25.2522 0.548042 25.0929 0.430056 24.8976C0.312067 24.7022 0.249876 24.4782 0.250235 24.25ZM15.554 13L2.75023 4.13502L2.75023 21.865L15.554 13Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="icecreamPicBox">
          <AnimatePresence custom={direction} mode="sync">
  <motion.img
    key={icecreams[currentIndex].pic}
    src={icecreams[currentIndex].pic}
    alt={icecreams[currentIndex].name}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    className="icecreamPicImg"
  />
</AnimatePresence>
        </div>
        <div className="icecreamNameListBox">
          <ul className="icecreamNameList">
            {icecreams.map((icecream, index) => (
              <li className="icecreamNameListItem" key={index}>
                <button
                  className="icecreamNameListButton"
                  style={{
                    fontWeight: index === currentIndex ? "bold" : "normal",
                  }}
                  onClick={() => {
                    setCurrentIndex(index);
                    bgSliderRef.current.slickGoTo(index);
                  }}
                >
                  {icecream.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lastBackgroundDecorator">
          <img src={lastBGDecorator} alt="Last Decorator" />
        </div>
      </motion.div>
    </div>
  );
}

export default IcecreamCarousel;
