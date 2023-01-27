import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Jessica Urban</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jessica-urban-045a23187/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/jurbster" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jessica Urban - Personal Website</small>
      </div>
    </footer>
  )
}

export default Footer