import React, { useState } from 'react'
import './sidebaradmin.css'
import { MdDashboard } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { AiOutlineShop } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FaSignOutAlt } from 'react-icons/fa';
import user from '../../images/users/customer01.jpg'
import Logout from '../../shared/logout/Logout';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

interface SidebarAdminProps {
    activeMenu: boolean;
    handleToggleClick: () => void;
  }

const SidebarAdmin: React.FC<SidebarAdminProps> = ({ activeMenu, handleToggleClick }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleMouseOver = (index: number) => {
        setSelectedItem(index);
    };

    return (
        <div>
            <div className={`navigation ${activeMenu ? 'active' : ''}`}>

                <ul>
                    <div className="div-togle">
                        <div className="toggle" onClick={handleToggleClick}>
                            <FiMenu className='icon-head'></FiMenu>
                        </div>
                    </div>
                    <li>
                        <Link to='#'>
                            <div className="icon-img">
                                <img src={user} className='logo-user' alt="afa" />

                            </div>
                            <span className="title">Nombre</span>
                        </Link>
                    </li>

                    <li onMouseOver={() => handleMouseOver(1)} className={selectedItem === 1 ? 'hovered' : ''}>
                        <Link to='/dashboard'>
                            <MdDashboard className="icon" />
                            <span className="title">Panel Administrativo</span>
                        </Link>
                    </li>

                    <li onMouseOver={() => handleMouseOver(2)} className={selectedItem === 2 ? 'hovered' : ''}>
                        <Link to='/customers'>
                            <PiUsersThreeBold className="icon" />
                            <span className="title">Clientes</span>
                        </Link>
                    </li>

                    <li onMouseOver={() => handleMouseOver(3)} className={selectedItem === 3 ? 'hovered' : ''}>
                        <Link to='/orders'>
                            <AiOutlineShop className="icon" />
                            <span className="title">Pedidos</span>
                        </Link>
                    </li>

                    <li onMouseOver={() => handleMouseOver(4)} className={selectedItem === 4 ? 'hovered' : ''}>
                        <Link to='/settings'>
                            <IoSettings className="icon" />
                            <span className="title">Ajustes</span>
                        </Link>
                    </li>
                    <li>
                        <Logout />
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default SidebarAdmin;