import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './cardproducts.css';
import { useCart } from '../../../context/DataContext';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import ValorationStar from '../../../controller/ValorationStart';
import calculateDiscountedPrice from '../../../controller/DiscontProducts';

// Define the Product interface
interface ProductProps {
    id: number;
    title: string;
    titlecomercial: string;
    discont?: number;
    price: number;
    image: string;
    brand: string;
    subcategoryIds: number[];
    category: number[];
    sizes: string[];
    grupoEdad: string[];
    gender: string[];
    img1?: string;
    img2?: string;
    img3?: string;
    cantidad?: number;
    valoration?: number;
    stock?: number;
}

const CardProducts: React.FC<ProductProps> = ({ id, title, titlecomercial, price, discont = 0, image, brand, category, sizes, grupoEdad, gender, cantidad, valoration
}) => {
    const { addCarrito } = useCart();
    const discountedPrice = calculateDiscountedPrice(price, discont);
    return (
        <div>
            <div className="card-products">
                <div className="fila">
                    <div key={id} className="col fondo-dots">
                        <div className="small_card">
                            <span className="like"><FaHeart className="fa-solid fa-heart" /></span>
                            <Link to={`/dtodo/producto/${id}`} className="zoom"><MdOutlineZoomOutMap className="fa-solid fa-heart" /></Link>
                        </div>
                        <div >
                            <div className='producto-img'>
                                <img src={image} alt={title} />
                            </div>
                        </div>
                        <div className='product-footer'>
                            <h1>{titlecomercial}</h1>
                            {discont > 0 ? (
                                <div>
                                    {/* <p className='price original-price'>S/{price}</p> */}
                                    <p className='price discounted-price'>S/{discountedPrice.toFixed(2)}</p>
                                </div>
                            ) : (
                                <p className='price'>S/{price}</p>
                            )}
                            {valoration !== undefined && (
                                <ValorationStar valoration={valoration} />
                            )}
                        </div>
                        <span className="btn-cart" onClick={() => addCarrito(id)}>
                            Añadir al carrito
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProducts;