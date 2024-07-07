import React from 'react'
import './detalleproduct.css'
export default function DetalleProduct() {
  return (
    <div>
      <section className="detalle-producto">
                <div className="fila">
                    <div className="col izquierda">
                        <h3>Nike Air Max 270 to Chuck Taylors</h3>
                        <p>Átate los cordones 100 % reciclados y empieza con buen pie en el running gracias a la suavidad de las Nike Air Max 270. </p>
                        <div className="miniaturas">
                            <img src="img/mini-shoes1.png" alt="" className="mini-selected" /* onclick="setMini('0')" *//>
                            <img src="img/mini-shoes2.png" alt="" /* onclick="setMini('1')" *//>
                            <img src="img/mini-shoes3.png" alt="" /* onclick="setMini('2')" *//>
                        </div>

                    </div>
                    <div className="col centro">
                        <div className="img-producto" id="img-producto">
                            <img src="img/shoes1.png" alt="" id="imgProducto"/>
                            <h3 className="precio-producto">$20,000.00</h3>
                        </div>
                    </div>
                    <div className="col derecha">
                        <div className="info-detalle">
                            Review:
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            4.5 (60)
                        </div>
                        <div className="info-detalle">
                            Color:
                            <input type="radio" className="color1" checked name="color"/>
                            <input type="radio" className="color2" name="color"/> 
                            <input type="radio" className="color3" name="color"/> 
                            <input type="radio" className="color4" name="color"/>  
                        </div>
                        <div className="info-detalle">
                            Size:
                            <button className="size-selected" /* onclick="setSize(0)" */>39</button>
                            <button /* onclick="setSize(1)" */>40</button>
                            <button /* onclick="setSize(2)" */>42</button>
                        </div>

                        <button className="btn-agregar-carrito">Agregar al Carrito</button>
                    </div>
                </div>
            </section>
    </div>
  )
}
