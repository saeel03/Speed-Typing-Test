import React from 'react'

import "./Header.css"
import { useTypingStore } from '../../store/useTypingStore';
import HeaderLogo from './HeaderLogo';


const Header = () => {

  const {wpm , accuracy, time} =useTypingStore();
  
  return (
    <div className="header" >

      <HeaderLogo/>

      <div className="header-stats">
        <span>WPM: <b>{wpm}</b></span>
        <span>Accuracy: <b>{accuracy}%</b></span>
        <span>Time: <b>{time}s</b></span>
      </div>

    </div>

  )
}

export default Header;
