import React from 'react'
import ZinzuChanLee from '../../images/customers/ZinzuChanLee.jpg';
import search from '../../images/customers/search.png';
import { Link } from 'react-router-dom';
import { FaEye, FaUserEdit } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { RiEmotionLine } from 'react-icons/ri';
import { FaRegSadCry } from "react-icons/fa";

export default function CustomerTable() {


    return (
        <div>
            <section className="table__header">
                <h1>Tabla de Clientes</h1>
                <div className="input-group">
                    <input type="search" placeholder="Search cliente..." />
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
                            <th className='column-th'> Perfil</th>
                            <th className='column-th'> Nombres</th>
                            <th className='column-th'> Apellidos</th>
                            <th className='column-th'> Correo</th>
                            <th className='column-th'> DNI</th>
                            <th className='column-th'> Rol</th>
                            <th className='column-th'> Celular</th>
                            <th className='column-th'> F. Nacimiento</th>
                            <th className='column-th'> Sexo</th>
                            <th className='column-th'> En Linea</th>
                            <th className='column-th'> Estado</th>
                            <th className='column-th'> Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td className='row-td'> <img src={ZinzuChanLee} alt="" /> </td>
                            <td className='row-td' > Milet</td>
                            <td className='row-td'> Figueroa T </td>
                            <td className='row-td'> milet@gmail.com </td>
                            <td className='row-td'> 12345678 </td>
                            <td className='row-td'> Cliente </td>
                            <td className='row-td'> 987654132 </td>
                            <td className='row-td'> 03 Ene, 23 </td>
                            <td className='row-td'>Mujer</td>
                            <td className='row-td'> <RiEmotionLine /></td>
                            <td className='row-td'> Activo</td>
                            <td className='row-td'>
                                <div className="actions-btn">
                                  <Link to='#' className='observer'>
                                    <FaEye />
                                </Link>  
                                <Link to='#' className='edit'>
                                        <FaUserEdit />
                                </Link>
                                <Link to='#' className='delete'>
                                        <MdOutlineDeleteForever />
                                </Link>
                                </div>
                                
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>
        </div>
    )
}
