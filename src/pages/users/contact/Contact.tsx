import React from 'react'
import Navbar from '../../../components/componentesUser/navbar/Navbar'
import '../../../styles/contact.css';
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaUser
} from "react-icons/fa";
import {
  FaLocationDot,
  FaPenToSquare,
  FaInstagram,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa6";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contacto">
        <div className="container-contacto">
          <div className="box-info">
            <h1>CONTÁCTATE CON NOSOTROS</h1>
            <div className="data">
              <p>
                <FaPhoneAlt className="fa-solid fa-phone" /> +51 989 505 663
              </p>
              <p>
                <FaEnvelopeOpenText className="fa-solid fa-envelope" /> ronalrojasroquej@gmail.com
              </p>
              <p>
                <FaLocationDot className="fa-solid fa-location-dot" /> Huacho -Lima - Perú
              </p>
            </div>
            <div className="links">
              <a href="https://www.facebook.com/RonalRojasRoqueJ" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="fa-brands fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/ronalrojasroquej/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="fa-brands fa-instagram" />
              </a>
              <a href="https://github.com/ronal-jonel-rojas-roque" target="_blank" rel="noopener noreferrer">
                <FaGithub className="fa-brands fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/in/ronal-rojas-a39772276" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
          <form>
            <div className="input-box">
              <input type="text" placeholder="Nombre y apellido" required />
              <FaUser className="fa-solid fa-user"/>
            </div>
            <div className="input-box">
              <input type="email" required placeholder="Correo electrónico" />
              <FaEnvelopeOpenText className="fa-solid fa-envelope"/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Asunto" />
              <FaPenToSquare className="fa-solid fa-pen-to-square"/>
            </div>
            <div className="input-box">
              <textarea placeholder="Escribe tu mensaje..."/>
            </div>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  )
}
