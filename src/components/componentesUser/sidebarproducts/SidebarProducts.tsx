import React, { useEffect, useRef, useState } from 'react';
import './sidebarproducts.css';
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';
import dataCategorys from '../../../data/Categorys';


interface SidebarProductsProps {
    isDayMode: boolean;
    sidebarActive: boolean;
    toggleSidebar: () => void;
    handleCategoriaClick: (categoriaId: number) => void;
    handleSubcategoriaClick: (subcategoriaId: number) => void;
}

const SidebarProducts: React.FC<SidebarProductsProps> = ({
    isDayMode,
    sidebarActive,
    toggleSidebar,
    handleCategoriaClick,
    handleSubcategoriaClick,
}) => {
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleCategory = (categoryId: number) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setActiveCategory(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sidebarRef} className={`container_sidebar_productos ${isDayMode ? 'day-mode' : 'night-mode'} ${sidebarActive ? 'active' : ''}`}>
            <div className={`sidebar_productos ${sidebarActive ? 'active' : ''}`}>
                <div className="menu-btn_productos" onClick={toggleSidebar}>
                    <SlArrowLeft className={`icon ${sidebarActive ? 'active' : ''}`} />
                </div>
                <div className="nav_productos">
                    <div className="menu_productos">
                        <p className="title_productos">Categorias</p>
                        <ul>
                            {dataCategorys.categorias.map(categoria => (
                                <li key={categoria.id} className={activeCategory === categoria.id ? 'active' : ''}>
                                    <Link to="#" className="link-content_productos">
                                        <CiUser className='icon_productos' onClick={() => { handleCategoriaClick(categoria.id); toggleCategory(categoria.id); }} />
                                        <span className="text_productos" onClick={() => handleCategoriaClick(categoria.id)}>{categoria.name}</span>
                                        <FaAngleDown className={`arrow ${activeCategory === categoria.id ? 'rotate' : ''}`} onClick={() => toggleCategory(categoria.id)} />
                                    </Link>
                                    <ul className={`sub-menu-productos ${isDayMode ? 'day-mode' : 'night-mode'} ${activeCategory === categoria.id ? 'active' : ''}`}>
                                        {dataCategorys.subcategories.filter(sub => sub.categoriaId === categoria.id).map(subcategory => (
                                            <li key={subcategory.id} onClick={() => handleSubcategoriaClick(subcategory.id)}>
                                                <Link to="#" className="link-content_productos">
                                                    <span className="text_productos">{subcategory.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarProducts;