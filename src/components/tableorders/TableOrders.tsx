import React from 'react'
import './tableorder.css'
import AlexGonley from '../../images/customers/AlexGonley.jpg';
import AlsonGC from '../../images/customers/AlsonGC.jpg';
import JeetSaru from '../../images/customers/JeetSaru.jpg';
import SaritaLimbu from '../../images/customers/SaritaLimbu.jpg';
import SonalGharti from '../../images/customers/SonalGharti.jpg';
import ZinzuChanLee from '../../images/customers/ZinzuChanLee.jpg';
import search from '../../images/customers/search.png';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TableOrders() {
    return (
        <div>
            <section className="table__header">
                <h1>Tabla de Pedidos</h1>
                <div className="input-group">
                    <input type="search" placeholder="Search pedido..." />
                    <img src={search} alt="" />
                </div>
                <div className="export__file">
                    <label form="export-file" className="export__file-btn" title="Export File"></label>
                    <input type="checkbox" id="export-file" />
                    <div className="export__file-options">
                        <label>Export As &nbsp; &#10140;</label>
                        <label form="export-file" id="toPDF">PDF <img src="images/pdf.png" alt="" /></label>
                        <label form="export-file" id="toJSON">JSON <img src="images/json.png" alt="" /></label>
                        <label form="export-file" id="toCSV">CSV <img src="images/csv.png" alt="" /></label>
                        <label form="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt="" /></label>
                    </div>
                </div>
            </section>
            <section className="table__body">
                <table>
                    <thead>
                        <tr>
                            <th className='column-th'> Id </th>
                            <th className='column-th'> Cliente </th>
                            <th className='column-th'> Pedido </th>
                            <th className='column-th'> Ubicación </th>
                            <th className='column-th'> F. Orden </th>
                            <th className='column-th'> F. Entrega </th>
                            <th className='column-th'> Estado </th>
                            <th className='column-th'> Monto </th>
                            <th className='column-th'> Ver </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='row-td'> 1 </td>
                            <td className='row-td'> <img src={ZinzuChanLee} alt="" />Zinzu Chan Lee</td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> Seoul </td>
                            <td className='row-td'> 17 Dic, 22 </td>
                            <td className='row-td'> 03 Ene, 23 </td>
                            <td className='row-td'>
                                <p className="estado delivered">Entregado</p>
                            </td>
                            <td className='row-td'> <strong> $128.90 </strong></td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 2 </td>
                            <td className='row-td'><img src={JeetSaru} alt="" /> Jeet Saru </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> Kathmandu </td>
                            <td className='row-td'> 27 Aug, 23 </td>
                            <td className='row-td'> 03 Dic, 23 </td>
                            <td className='row-td'>
                                <p className="estado cancelled">Cancelado</p>
                            </td>
                            <td className='row-td'> <strong>$5350.50</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 3</td>
                            <td className='row-td'><img src={SonalGharti} alt="" /> Sonal Gharti </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> Tokyo </td>
                            <td className='row-td'> 14 Mar, 23 </td>
                            <td className='row-td'> 14 Jun, 23 </td>
                            <td className='row-td'>
                                <p className="estado shipped">Enviado</p>
                            </td>
                            <td className='row-td'> <strong>$210.40</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 4</td>
                            <td className='row-td'><img src={AlsonGC} alt="" /> Alson GC </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> New Delhi </td>
                            <td className='row-td'> 14 Mar, 23 </td>
                            <td className='row-td'> 14 Jun, 23 </td>
                            <td className='row-td'>
                                <p className="estado delivered">Entregado</p>
                            </td>
                            <td className='row-td'> <strong>$149.70</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 5</td>
                            <td className='row-td'><img src={SaritaLimbu} alt="" /> Sarita Limbu </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> Paris </td>
                            <td className='row-td'> 14 Mar, 23 </td>
                            <td className='row-td'> 14 Jun, 23 </td>
                            <td className='row-td'>
                                <p className="estado pending">Pendiente</p>
                            </td>
                            <td className='row-td'> <strong>$399.99</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 6</td>
                            <td className='row-td'><img src={AlexGonley} alt="" /> Alex Gonley </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> London </td>
                            <td className='row-td'> 14 Mar, 23 </td>
                            <td className='row-td'> 14 Jun, 23 </td>
                            <td className='row-td'>
                                <p className="estado cancelled">Cancelado</p>
                            </td>
                            <td className='row-td'> <strong>$399.99</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 7</td>
                            <td className='row-td'><img src={AlsonGC} alt="" /> Jeet Saru </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> New York </td>
                            <td className='row-td'> 14 Mar, 23 </td>
                            <td className='row-td'> 14 Jun, 23 </td>
                            <td className='row-td'>
                                <p className="estado delivered">Entregado</p>
                            </td>
                            <td className='row-td'> <strong>$399.99</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 8</td>
                            <td className='row-td'><img src={SaritaLimbu} alt="" /> Aayat Ali Khan </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> Islamabad </td>
                            <td className='row-td'> 14 Mar, 23 </td>
                            <td className='row-td'> 14 Jun, 23 </td>
                            <td className='row-td'>
                                <p className="estado pending">Pendiente</p>
                            </td>
                            <td className='row-td'> <strong>$149.70</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='row-td'> 9</td>
                            <td className='row-td'><img src={AlexGonley} alt="" /> Alson GC </td>
                            <td className='row-td'> Conjunto de ropa </td>
                            <td className='row-td'> Dhaka </td>
                            <td className='row-td'> 14 Mar, 23 </td>
                            <td className='row-td'> 14 Jun, 23 </td>
                            <td className='row-td'>
                                <p className="estado cancelled">Cancelado</p>
                            </td>
                            <td className='row-td'> <strong>$249.99</strong> </td>
                            <td className='row-td'>
                                <Link to='#'>
                                    <FaEye />
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>
        </div>
    )
}
