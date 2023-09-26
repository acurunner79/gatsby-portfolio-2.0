import React from 'react'
import Hamburger from './Hamburger'
import '../../styles/header.css'

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='left-part'>
          <img src='https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_250/v1616622334/website_logo_transparent_background_lzgkuz.png' alt=''/>
        </div>
        <div className='right-part'>
            <Hamburger />
        </div>
      </div>
    </header>
  )
}

export default Header
