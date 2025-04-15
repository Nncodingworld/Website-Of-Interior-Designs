import React from 'react'
import { PiBuildingFill } from 'react-icons/pi'
import "./Logo.css"
const Logo = () => {
  
  return (
    <div className='logo'>
      <div className="icon_container">
        <PiBuildingFill/>
      </div>
      <h1 className="name">Hom<span>Styl</span></h1>
    </div>
  )
}

export default Logo
