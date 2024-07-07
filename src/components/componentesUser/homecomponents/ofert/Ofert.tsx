import React, { useEffect, useState } from 'react'
import './ofert.css';
import imagen from '../../../../images/products/air.png'
import { useCart } from '../../../../context/DataContext';
import calculateDiscountedPrice from '../../../../controller/DiscontProducts';

export default function Ofert() {
    const { productos } = useCart();


    const productosConDescuento = productos
        .filter(producto => producto.discont === 50)
        .sort((a, b) => (b.valoration || 0) - (a.valoration || 0))
        .slice(0, 15);

        const productosExtendidos = [...productosConDescuento, ...productosConDescuento.slice(0, 2)];
        const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % productosConDescuento.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [productosConDescuento.length]);

    const transformValue = `translateX(-${currentIndex * (100 / 3)}%)`;

    return (
        <div>
            <div className="container-ofert">
                <div className="content-columns-ofert">
                    <div className="columns-ofer izquierda">
                        <h1>Aprovecha los descuentos de verano</h1>
                        <span>Descuentos en diversos productos de hasta un 50%</span>
                    </div>
                    <div className="columns-ofer">
                        <div className="buttons-prev-next">
                            <button className="prev" onClick={() => setCurrentIndex(prevIndex => (prevIndex - 1 + productosExtendidos.length) % productosExtendidos.length)}>Anterior</button>
                            <button className="next" onClick={() => setCurrentIndex(prevIndex => (prevIndex + 1) % productosExtendidos.length)}>Siguiente</button>
                        </div>

                        <div className="carrusel-ofert" style={{ transform: transformValue }}>
                            {/* Mostrar los slides */}
                            {productosExtendidos.map((producto, index) => (
                                <div key={`${producto.id}-${index}`} className="carrusel-data">
                                    <div className="img-data-productos">
                                        <img src={producto.image || imagen} alt={producto.title} />
                                    </div>
                                    <div className="data-ofert">
                                        <h2>{producto.titlecomercial}</h2>
                                        <span className="discount-price">S/{calculateDiscountedPrice(producto.price || 0, producto.discont || 0).toFixed(2)} <strong>{producto.discont}%</strong></span>
                                        <span className="original-price">S/{producto.price?.toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}