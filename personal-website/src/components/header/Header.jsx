import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import ME from '../../assets/Graduation4.0.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1>Jessica Urban</h1>
        <h5 className="text-light">Software Engineer</h5>
        <HeaderButtons />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header