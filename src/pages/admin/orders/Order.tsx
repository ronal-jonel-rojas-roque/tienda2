import React, { useState } from 'react'
import SidebarAdmin from '../../../components/sidebar/SidebarAdmin'
import TableOrders from '../../../components/tableorders/TableOrders';

export default function Order() {
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
                    <TableOrders />
                </div>
            </div>
        </div>
    )
}
