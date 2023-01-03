import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='main'>
      <aside className='side-nav'>
        <ul>
          <a href='https://www.linkedin.com/in/nebojša-nikolić-3946a7193'>
            <FaLinkedin />
          </a>

          <a href='https://github.com/nebojsa1803'>
            <FaGithubSquare />
          </a>
        </ul>
      </aside>
      <div className='main-page-content'>
        <div className='main-page'>
          <h1 className='main-page-title'>Nebojša Nikolić</h1>
          <p className='main-page-para'>Software Developer/Mathematician</p>
          <Link to='/projects' className='main-page-link'>
            My Work
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
