import React, { useState } from 'react'
import './customers.css'
import SidebarAdmin from '../../../components/sidebar/SidebarAdmin';
import CustomerTable from '../../../components/tablecustomers/CustomerTable ';

const data = [
    {
      id: 1,
      image: '',
      nombres: 'John',
      apellidos: 'Doe',
      correo: 'john.doe@example.com',
      rol_id: 'Admin',
      dni: '12345678',
      celular: '1234567890',
      fecha_nacimiento: '1990-01-01',
      sexo: 'M',
      estado: 'Activo',
      enLinea: true,
    },
  ];
  
export default function Customers() {

    const [activeMenu, setActiveMenu] = useState(false);

    const handleToggleClick = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <div>
            <div className="container">

                <SidebarAdmin
                    activeMenu={activeMenu}
                    handleToggleClick={handleToggleClick}
                />
                <div className={`main ${activeMenu ? 'active' : ''}`}>
                    <CustomerTable />
                </div>
            </div>
        </div>
    )
}
