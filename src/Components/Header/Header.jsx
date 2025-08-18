import React, {useState} from 'react'
import './Header.css'
import NavBar from './NavBar/NavBar'
import IcecreamCarousel from './IcecreamCarousel/IcecreamCarousel'
import { icecreams } from "./icecreamsData";

function Header() {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="headerContainer">
        < NavBar icecreams={icecreams} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        < IcecreamCarousel icecreams={icecreams} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  )
}

export default Header