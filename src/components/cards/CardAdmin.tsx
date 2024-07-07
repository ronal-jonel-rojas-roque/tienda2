import React from 'react'
import { FaCartPlus, FaComments, FaEye } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import './cardadmin.css'
export default function CardAdmin() {
    return (
        <div>
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Visitas</div>
                    </div>

                    <div className="iconBx">
                        <FaEye className='icon-head' />
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Pedidos</div>
                    </div>

                    <div className="iconBx">
                        <FaCartPlus className='icon-head' />
                    </div>
                </div>


                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Ganancias</div>
                    </div>

                    <div className="iconBx">
                        <GiMoneyStack className='icon-head' />
                    </div>
                </div>
            </div>
        </div>
    )
}
