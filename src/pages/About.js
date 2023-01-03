import React from 'react'
import lightball from './../images/lightball.jpg'

function About() {
  return (
    <div id='about-me'>
      <div className='about-me__img'>
        <img src={lightball} alt='lightball' />
      </div>
      <div className='about-me__content'>
        <h2 className='about-me-title'>Profile</h2>
        <p className='about-me-para'>
          Experienced mathematics teacher with a desire to work in the
          information technology and services industry. Skilled in ReactJS,
          JavaScript (programming language) and mathematics. Energetic,
          optimistic, well organized and hardworking person. Interested in
          personal development, passionate about music, movies and books.
        </p>
        <h2 className='about-me-title'>Education</h2>
        <p className='about-me-para'>
          Faculty of Mathematics, University of Belgrade
        </p>
        <h2 className='about-me-title'>Tools and technologies</h2>
        <p className='about-me-para'>
          ReactJS, JavaScript, Redux ToolKit, HTML5, CSS3, React Router 6
        </p>
      </div>
    </div>
  )
}

export default About
