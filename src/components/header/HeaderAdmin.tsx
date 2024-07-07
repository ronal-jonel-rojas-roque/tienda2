import React from 'react'
import './headeradmin.css'
import user from '../../images/users/customer01.jpg'
import logo from '../../images/fondo/9.png'

function HeaderAdmin() {
  return (
    <div className='header'>
      <div className="topbar">
        <div className="user">
          <img src={logo} alt="logo" />
        </div>

        <div className="Title-head">
          <h2>
            Panel Administrativo
          </h2>
        </div>

        <div className="user">
          <img src={user} alt="afa" />
        </div>
      </div>
    </div>
  )
}

export default HeaderAdmin