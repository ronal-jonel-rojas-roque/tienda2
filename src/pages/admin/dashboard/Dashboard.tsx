import React, { useState } from 'react'
import '../../../styles/dashboard.css'
import HeaderAdmin from '../../../components/header/HeaderAdmin';
import SidebarAdmin from '../../../components/sidebar/SidebarAdmin';
import CardAdmin from '../../../components/cards/CardAdmin';
import OrderDetails from '../../../components/orderdetailsadmin/OrderDetails';


export default function Dashboard() {

  const [activeMenu, setActiveMenu] = useState(false);

  const handleToggleClick = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div >
      <div className="container">

        <SidebarAdmin
          activeMenu={activeMenu}
          handleToggleClick={handleToggleClick}
        />
        <div className={`main ${activeMenu ? 'active' : ''}`}>
          <HeaderAdmin />
          <CardAdmin />
          <OrderDetails />

        </div>
      </div>
    </div>
  )
}
