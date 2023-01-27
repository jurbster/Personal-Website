import React from 'react'
import Resume from '../../assets/Resume - Jessica Urban.pdf'

const HeaderButtons = () => {
  return (
    <div className = 'headerButtons'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default HeaderButtons