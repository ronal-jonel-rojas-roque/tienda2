import React from 'react'
import './tophome.css'
import { Link } from 'react-router-dom'

import img3 from '../../../../images/vistas/vista4.png'
import discont from '../../../../images/vistas/discont.png'

export default function TopHome() {
    return (
        <div>
            <div className="container-top-home">
                <div className="content-top-home">
                    <div className="izq-top-home" >
                        <div className="text-izq">
                            <h1>Adquiere nuestros productos desde tu casa</h1>
                            <span>Aprovecha nuestas ofertas, compra nuestros productos hasta con un
                                50% de descuento
                            </span>
                        </div>
                        <div className="btn-url">
                            <Link to='/tienda' >
                                <span className='btn'>
                                    comprar
                                </span>

                            </Link>
                        </div>
                    </div>
                    <div className="der-top-home">
                        <div className="botoom-der">
                            <img src={img3} alt="img" className='large' />
                        </div>
                        <div className="discont">
                            <img src={discont} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
