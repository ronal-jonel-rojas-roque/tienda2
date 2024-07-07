import React, { useContext, useEffect, useState } from 'react';
import './cart.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaTrashCanArrowUp } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import producto from '../../../assets/images/productos/camisetas/hombre/ch01_01.jpg'
import imgcarrito from "../../../assets/images/carrito/carritoVacio.png"
import { useNavigate } from 'react-router-dom';
import { DataContext, useCart } from '../../../context/DataContext';

interface CartModalProps {
    toggleCartModal: () => void;
    isOpen: boolean;
}


const CartModal: React.FC<CartModalProps> = ({ toggleCartModal, isOpen }) => {
    const navigate = useNavigate();

    const { carrito, total, setCarrito } = useCart();


    const [compraRealizada, setCompraRealizada] = useState(false);

    /* useEffect(() => {
        const newTotal = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    }, [carrito]); */


    const reduce = (id: Number) => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad = item.cantidad === 1 ? 1 : (item.cantidad || 1) - 1;
            }
            setCarrito([...carrito])
        })
    }

    const increase = (id: Number) => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad = (item.cantidad || 0) + 1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = (id: number) => {
        Swal.fire({
            title: '¿Quieres eliminar el producto?',
            text: "Esta acción no se puede deshacer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminarlo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCarrito(carrito.filter(item => item.id !== id));
                Swal.fire('Eliminado', 'El producto ha sido eliminado del carrito.', 'success');
            }
        });
    }

    const comprarAhora = () => {
        Swal.fire('¡Gracias por tu compra!', '', 'success');
        setCompraRealizada(true);
        setTimeout(() => {
            navigate(`/DTODO/compraRealizada?productos=${encodeURIComponent(JSON.stringify(carrito))}`);
        }, 2000);
    };

    const cartIsEmpty = carrito.length === 0;
    return (
        <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
            <div className="cart-modal-overlay" onClick={toggleCartModal}></div>
            <div className="cart-modal-content">
                <button className="close-modal" onClick={toggleCartModal}>X</button>
                <section >
                    <div className="header-seccion">

                        <h2 className={`title-primary ${cartIsEmpty ? 'cart-empty' : 'cart-filled'}`}>Carrito</h2>
                        <div className="carrito__center">
                            {carrito.length === 0 ? (
                                <div className="carrito__vacio">
                                    <h2 style={{ textAlign: "center", fontSize: "3rem" }} className='h2-vacio'>Tu carrito está vacío.</h2>
                                    <img src={imgcarrito} alt="Carrito vacío" className='img-carritovacio' />
                                </div>
                            ) : (
                                <>
                                    {carrito.map((producto) => (
                                        <div className="carrito__item" key={producto.id}>
                                            <div className='carrito-producto-imagen'>
                                                <img className='producto-imagen' src={producto.image} alt={producto.title} />
                                            </div>
                                            <div className='carrito-producto-title'>
                                                <small>Nombre</small>
                                                <p className="title-producto"> {producto.title} </p>
                                            </div>
                                            <div className='carrito-producto-precio'>
                                                <small>Precio</small>
                                                <p className="price">S/{producto.price}</p>
                                            </div>
                                            <div className='carrito-producto-cantidad'>
                                                < IoIosArrowUp
                                                    onClick={() => increase(producto.id)} name="up-arrow"
                                                    type="solid"
                                                />
                                                <p className="cantidad">{producto.cantidad}</p>
                                                <IoIosArrowDown
                                                    onClick={() => reduce(producto.id)}
                                                    name="down-arrow"
                                                    type="solid"
                                                />
                                            </div>
                                            <div className='carrito-producto-precio'>
                                                <small>Subtotal</small>
                                                <p className="price">S/{producto.price * (producto.cantidad || 1)}</p>
                                            </div>
                                            <div
                                                onClick={() => removeProducto(producto.id)}
                                                className="remove__item"
                                            >
                                                <FaTrashCanArrowUp name="trash" className="trash_remove" />
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                            <div className="carrito__footer">
                                <div className='carrito-acciones-izquierda'>
                                    {carrito.length > 0 && (
                                        <button
                                            className='carrito-acciones-vaciar'
                                            onClick={() => {
                                                Swal.fire({
                                                    title: '¿Estás seguro de vaciar el carrito?',
                                                    text: `Se eliminarán todos los productos.`,
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#08a05c',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Sí, vaciar carrito',
                                                    cancelButtonText: 'Cancelar'
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        setCarrito([]);
                                                        Swal.fire('Carrito vaciado', '', 'success');
                                                    }
                                                });
                                            }}
                                        >
                                            Vaciar Carrito
                                        </button>
                                    )}
                                </div>
                                <div className='carrito-acciones-derecha'>
                                    {carrito.length > 0 && (
                                        <div className='carrito-acciones-total'>
                                            <div className='acciones-total'>
                                                <p>TOTAL:</p>
                                                <p>S/{total}</p>
                                            </div>
                                            <div className='carrito-acciones-comprar' onClick={comprarAhora}>
                                                Comprar Ahora
                                            </div>
                                            {compraRealizada && (
                                                <div className='carrito-comprado'>
                                                    "Estamos redirigiéndote con el proveedor."
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default CartModal;