import React from 'react'
import { Link } from 'react-router-dom'
import './orderdetails.css';

export default function OrderDetails() {
    return (
        <div>
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Pedidos Recientes</h2>
                        <Link to="/orders" className="btn">Ver Todos</Link>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th className='column-th'>Nombre</th>
                                <th className='column-th'>Cliente</th>
                                <th className='column-th'>F. Pedido</th>
                                <th className='column-th'>F. Entrega</th>
                                <th className='column-th'>Precio</th>
                                <th className='column-th'>Estado</th>
                                <th className='column-th'>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>$1200</td>
                                <td><p className="estado delivered">Delivered</p></td>
                                <td>
                                    <div className="actions-btn">
                                        <Link to='/detallepedido' className='btn-actions'>
                                            <strong >
                                                ver
                                            </strong>

                                        </Link>
                                        <Link to='/editarpedido' className='btn-actions'>
                                            <strong>
                                                editar
                                            </strong>
                                        </Link>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
