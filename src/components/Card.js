import React from 'react'

function Card({ description, url, title, img }) {
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img src={require(`./../projects/prjImgs/${img}`)} alt='web-adress' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h2>{title}</h2>
        </div>
        <div className='card-description'>
          <p>{description}</p>
        </div>
      </div>
      <div className='card-link'>
        <a className='main-page-link anc-card' href={url}>
          View More
        </a>
      </div>
    </div>
  )
}

export default Card
