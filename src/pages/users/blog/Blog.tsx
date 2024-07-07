import React from 'react'
import './blog.css'
import Navbar from '../../../components/componentesUser/navbar/Navbar'
import Post from '../../../components/componentesUser/posts/Post';
import FooterUser from '../../../components/componentesUser/footer/FooterUser';
import about from '../../../images/post/about.png';

export default function Blog() {
    return (
        <div className='blog-container'>
            <Navbar />

            <section className="home" id="home">
                <div className="home-text container">
                    <h2 className="home-title">Tendencias</h2>
                    <span className="home-subtitle">Tu fuente de excelente contenido</span>
                </div>
            </section>

            <section className="about container" id="about">
                <div className="contentBx">
                    <h2 className="titleText">Ponte al día con los temas de actualidad</h2>
                    <p className="title-text">
                    En nuestro blog "Ponte al día con los temas de actualidad", exploramos los eventos más relevantes y las innovaciones que están moldeando nuestro mundo.
                        <br />Desde tecnología y ciencia hasta cultura y sociedad, te ofrecemos un análisis detallado y opiniones expertas para que no te pierdas de nada. ¡Sigue leyendo y mantén tu conocimiento actualizado!
                    </p>
                    <div className="contenedor-btn2">
                    <a href="#" className="btn2">Leer Más</a>
                    </div>
                    
                </div>
                <div className="imgBx">
                    <img src={about} alt="" className="fitBg" />
                </div>
            </section>

            <Post />

            <FooterUser />
        </div>
    )
}
