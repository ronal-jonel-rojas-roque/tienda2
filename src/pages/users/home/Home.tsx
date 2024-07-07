import React, { useState } from 'react'
import '../../../styles/home.css'
import Logout from '../../../shared/logout/Logout'
import Navbar from '../../../components/componentesUser/navbar/Navbar'
import ProductsHome from '../../../components/componentesUser/homecomponents/ProductsHome';
import FooterUser from '../../../components/componentesUser/footer/FooterUser';

export default function Home() {

  const [isDayMode, setIsDayMode] = useState(true);

  const toggleDayNightMode = () => {
    setIsDayMode(prevMode => !prevMode);
  };
  
  return (
    <div className='contenedor' onClick={toggleDayNightMode}>
      <Navbar />
      <ProductsHome />
      
      <FooterUser />

    </div>
  )
}
