import React, { useState } from 'react';
import CardProducts from '../components/componentesUser/cardproducts/CardProducts';
import dataProducs from '../data/Data';

interface FiltroProductosProps {
    categoria: number | null;
    subcategoria: number | null;
    mostrarTodos: boolean;
}

const FiltroProductos: React.FC<FiltroProductosProps> = ({ categoria, subcategoria, mostrarTodos }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productosPorPagina = 20;

    let productosFiltrados = dataProducs.items;

    if (!mostrarTodos) {
        if (categoria !== null) {
            productosFiltrados = productosFiltrados.filter(producto =>
                producto.category.includes(categoria)
            );
        }
        if (subcategoria !== null) {
            productosFiltrados = productosFiltrados.filter(producto =>
                producto.subcategoryIds.includes(subcategoria)
            );
        }
    }

    const productoNoEncontrado = productosFiltrados.length === 0;

    const indexOfLastProduct = currentPage * productosPorPagina;
    const indexOfFirstProduct = indexOfLastProduct - productosPorPagina;
    const productosActuales = productosFiltrados.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='productos-content-filter'>

                {productoNoEncontrado ? (
                    <p>Producto no encontrado</p>
                ) : (
                    productosActuales.map(producto => (
                        <CardProducts key={producto.id} {...producto} />
                    ))
                )}
            </div>

            <ul className="pagination-products-filter">
                {Array.from({ length: Math.ceil(productosFiltrados.length / productosPorPagina) }, (_, i) => (
                    <li key={i + 1} className={currentPage === i + 1 ? 'active' : ''}>
                        <a onClick={() => paginate(i + 1)} href="#!">
                            {i + 1}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FiltroProductos;
