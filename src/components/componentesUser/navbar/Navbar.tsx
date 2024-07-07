import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { LiaOpencart } from "react-icons/lia";
import CartModal from '../cart/Cart';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { useCart } from '../../../context/DataContext';
import { FaHeart, FaUser } from 'react-icons/fa';
import Logout from '../../../shared/logout/Logout';

export default function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [modeText, setModeText] = useState("Dark mode");

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


    const { carrito } = useCart();
    const navRef = useRef<HTMLDivElement>(null);

    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggler");
        } else setIcon("nav__toggler");
    };

    const toggleCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen);
    };

    const toggleDarkMode = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
        setModeText(isDarkMode ? "Light mode" : "Dark mode");
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsUserMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='contenedor-navbar' ref={navRef}>
            <nav className="nav">
                <Link to="/" className="nav__brand">
                    <h1>Shoe<span>s</span></h1>
                </Link>
                <ul className={active}>
                    <li className="nav__item">
                        <Link to="/home" className="nav__link">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/tienda" className="nav__link">
                            Tienda
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/blog" className="nav__link">
                            Blog
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contact" className="nav__link">
                            Contacto
                        </Link>
                    </li>
                </ul>
                <div className="nav__item cart">
                    <div className="nav__link" onClick={toggleUserMenu}>
                        <FaUser className='icon' />
                        {isUserMenuOpen && (
                            <div className="user-menu">
                                <Link to="/profile" className="user-menu-item">Perfil</Link>
                                <div className="user-menu-item"><Logout /></div>
                                <div className="user-menu-item mode" onClick={toggleDarkMode}>
                                    <div className="sun-moon">
                                        <BsFillMoonStarsFill className='bx bx-moon icon moon'></BsFillMoonStarsFill>
                                        <MdOutlineWbSunny className='bx bx-sun icon sun'></MdOutlineWbSunny>
                                    </div>
                                    <span className="mode-text text">{modeText}</span>
                                    <div className="toggle-switch">
                                        <span className="switch"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="nav__link">
                        <FaHeart className='icon heart' />
                    </div>
                    <div onClick={toggleCartModal} className="nav__link carrito-icon">
                        <LiaOpencart />
                        <span className="item-total">{carrito.length}</span>
                    </div>
                </div>


                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            {isCartModalOpen && <CartModal toggleCartModal={toggleCartModal} isOpen={isCartModalOpen} />}
        </div>
    )
}
