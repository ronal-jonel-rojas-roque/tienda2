import React, { useRef, useState } from 'react'
import SidebarProducts from '../sidebarproducts/SidebarProducts';
import './products.css'
import FiltroProductos from '../../../controller/FiltroProductos';
import dataCategorys from '../../../data/Categorys';
/* import FooterUser from '../footer/FooterUser'; */

export default function Products() {
    const [isDayMode, setIsDayMode] = useState(true);
    const [sidebarActive, setSidebarActive] = useState(false);

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number | null>(null);
    const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState<number | null>(null);

    const contentRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const handleCategoriaClick = (categoriaId: number) => {
        setCategoriaSeleccionada(categoriaId);
        setSubcategoriaSeleccionada(null);
    };

    const handleSubcategoriaClick = (subcategoriaId: number) => {
        setSubcategoriaSeleccionada(subcategoriaId);
    };

    // Obtener nombres de categoría y subcategoría
    const obtenerNombreCategoria = (id: number | null) => {
        if (id === null) return '';
        const categoria = dataCategorys.categorias.find(cat => cat.id === id);
        return categoria ? categoria.name : '';
    };

    const obtenerNombreSubcategoria = (id: number | null) => {
        if (id === null) return '';
        const subcategoria = dataCategorys.subcategories.find(sub => sub.id === id);
        return subcategoria ? subcategoria.name : '';
    };

    // Texto del filtro dinámico
    let textoFiltro = 'Productos >> todos';
    if (categoriaSeleccionada !== null) {
        textoFiltro = `Productos >> ${obtenerNombreCategoria(categoriaSeleccionada)}`;
        if (subcategoriaSeleccionada !== null) {
            textoFiltro += ` >> ${obtenerNombreSubcategoria(subcategoriaSeleccionada)}`;
        }
    }

    return (
        <div className="products-container">
            <SidebarProducts
                toggleSidebar={toggleSidebar}
                sidebarActive={sidebarActive}
                isDayMode={isDayMode}
                handleCategoriaClick={handleCategoriaClick}
                handleSubcategoriaClick={handleSubcategoriaClick}
            />

            <div ref={contentRef} className={`container-user-productos ${sidebarActive ? 'active' : ''}`}>
                <h1 className="title-productos">Todos nuestros productos</h1>
                <div className="filtro-header">
                    <p className="text-filtro">{textoFiltro}</p>
                </div>
                <FiltroProductos
                    categoria={categoriaSeleccionada}
                    subcategoria={subcategoriaSeleccionada}
                    mostrarTodos={categoriaSeleccionada === null && subcategoriaSeleccionada === null}
                />
            </div>

           {/*  <section className="footer-section">
                <FooterUser />
            </section> */}
        </div>
    );
}