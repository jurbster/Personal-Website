import React from 'react'
import './about.css'
import ME from '../../assets/wedding2.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Bachelors of Science in Computer Science</small>
            </article>
{/*
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Bachelors of Science in Computer Science</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Bachelors of Science in Computer Science</small>
            </article>
  */}
          </div>

          <p>
            I graduated from Middle Tennessee State University with my Bachelors in Computer Science. I am newly married (October 2023), but I have been with my husband for almost ten years. I have a black cat named Sucy, and an Australian Shepherd named Paxton. I love to go hiking, especially anywhere that has a water feature. I also love watching TV/movies, and playing video/board games!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About