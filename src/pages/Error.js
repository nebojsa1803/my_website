import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error-page'>
      <div className='error-page-content'>
        <h1>ERROR 404</h1>
        <p>Page Not Found</p>
        <Link to='/' className='main-page-link'>
          Back Home
        </Link>
      </div>
    </div>
  )
}

export default Error
