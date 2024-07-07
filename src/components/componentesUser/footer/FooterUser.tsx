import React from 'react'
import './footeruser.css'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function FooterUser() {
    return (
        <div>
            <footer>
                <div className="footer_main">
                    <div className="tag">
                        <h1>Contacto</h1>
                        <a href="#">
                            <MdMapsHomeWork className="fa-solid fa-house" />123/Lima/Perú</a>
                        <a href="#">
                            <FaPhoneAlt className="fa-solid fa-phone" />+51 989 505 663</a>
                        <a href="#">
                            <MdMarkEmailRead className="fa-solid fa-envelope" />contact@gmail.com</a>
                    </div>

                    <div className="tag">
                        <h1>Ayuda</h1>
                        <a href="#" className="center">FAQ</a>
                        <a href="#" className="center">Compras</a>
                        <a href="#" className="center">Devoluciones</a>
                        <a href="#" className="center">Opciones de pago</a>
                    </div>

                    <div className="tag">
                        <h1>Nuestras tiendas</h1>
                        <a href="#" className="center">Lima</a>
                        <a href="#" className="center">Pucallpa</a>
                        <a href="#" className="center">Huánuco</a>
                        <a href="#" className="center">Arequipa</a>
                    </div>

                    <div className="tag">
                        <h1>Siguenos</h1>
                        <div className="social_link">
                            <a href="#"><FaFacebookF className="fa-brands fa-facebook-f"></FaFacebookF></a>
                            <a href="#"><FaXTwitter className="fa-brands fa-twitter"></FaXTwitter></a>
                            <a href="#"><FiInstagram className="fa-brands fa-instagram"></FiInstagram></a>
                            <a href="#"><FaLinkedinIn className="fa-brands fa-linkedin-in"></FaLinkedinIn></a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}
