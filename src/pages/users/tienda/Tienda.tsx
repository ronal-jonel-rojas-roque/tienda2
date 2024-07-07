import React from 'react'
import Navbar from '../../../components/componentesUser/navbar/Navbar'
import Products from '../../../components/componentesUser/products/Products'
import FooterUser from '../../../components/componentesUser/footer/FooterUser'
import '../../../styles/home.css'

export default function Tienda() {
  return (
    <div >
      <Navbar />
      <div className='tienda'>
        <section className="contenedor-seccion">
          <Products />
        </section>
        {/* <FooterUser /> */}
      </div>

    </div>
  )
}
