import React, { useState } from 'react'
import './post.css'
import img1 from '../../../images/post/img1.jpg';
import img2 from '../../../images/post/img2.jpg';
import img3 from '../../../images/post/img3.jpg';
import img4 from '../../../images/post/img4.jpg';
import img5 from '../../../images/post/img5.jpg';
import img6 from '../../../images/post/img6.jpg';
import img7 from '../../../images/post/img7.jpg';
import img8 from '../../../images/post/img8.jpg';
import img9 from '../../../images/post/img9.jpg';


import testi1 from '../../../images/post/testi1.jpg';
import testi2 from '../../../images/post/testi2.jpg';
import testi3 from '../../../images/post/testi3.jpg';

const posts = [
    {
        id: 1,
        category: 'tech',
        img: img1,
        title: '10 Gadgets que Deberías Tener en 2024',
        date: '12 Feb 2022',
        description: 'Explora las últimas tendencias en moda y estilo que están capturando la atención de todos este año. Desde colores y tejidos innovadores hasta estilos que marcan la diferencia, te presentamos una guía completa para que renueves tu guardarropa con las piezas más actuales. ¡No te pierdas nuestras sugerencias para estar siempre a la moda!',
        profileImg: testi1,
        profileName: 'MKHB'
    },
    {
        id: 2,
        category: 'food',
        img: img2,
        title: '10 Superalimentos que Deberías Incluir en Tu Dieta',
        date: '12 Feb 2022',
        description: 'Los superalimentos son esenciales para una dieta saludable y equilibrada. En este artículo, te presentamos diez superalimentos que deberías considerar añadir a tu rutina diaria. Conoce sus beneficios, propiedades nutritivas y algunas ideas de cómo incorporarlos en tus comidas para mejorar tu salud y bienestar.',
        profileImg: testi2,
        profileName: 'Pedro P.'
    },
    {
        id: 3,
        category: 'food',
        img: img3,
        title: 'Recetas Fáciles y Deliciosas para el Verano',
        date: '12 Feb 2022',
        description: 'El verano es la época perfecta para disfrutar de comidas frescas y deliciosas. En este post, te compartimos recetas fáciles de preparar que harán que tus días soleados sean aún más agradables. Desde ensaladas refrescantes hasta postres ligeros, descubre platos que te encantarán a ti y a tus invitados.',
        profileImg: testi3,
        profileName: 'Christinn A.'
    },
    {
        id: 4,
        category: 'news',
        img: img4,
        title: 'Tendencias Emergentes: Lo Más Nuevo en Moda y Estilo',
        date: '12 Feb 2022',
        description: 'Explora las últimas tendencias en moda y estilo que están capturando la atención de todos este año. Desde colores y tejidos innovadores hasta estilos que marcan la diferencia, te presentamos una guía completa para que renueves tu guardarropa con las piezas más actuales. ¡No te pierdas nuestras sugerencias para estar siempre a la moda!',
        profileImg: testi2,
        profileName: 'Pedro P.'
    },
    {
        id: 5,
        category: 'tech',
        img: img5,
        title: 'El Futuro de la Inteligencia Artificial: Oportunidades y Desafíos',
        date: '12 Feb 2022',
        description: 'La inteligencia artificial está transformando nuestras vidas de maneras inimaginables. En este post, exploramos las oportunidades y desafíos que presenta esta tecnología emergente. Desde aplicaciones prácticas hasta preocupaciones éticas, te ofrecemos un análisis completo para entender el impacto de la IA en el futuro cercano.',
        profileImg: testi3,
        profileName: 'Christinn A.'
    },
    {
        id: 6,
        category: 'news',
        img: img6,
        title: 'Novedades en Entretenimiento: Estrenos de Películas y Series de Este Mes',
        date: '12 Feb 2022',
        description: 'Mantente al día con los estrenos más esperados de películas y series que están revolucionando el entretenimiento. En este post, te ofrecemos una vista previa de lo que está por llegar a la pantalla grande y a tus plataformas de streaming favoritas. Conoce los títulos que no te puedes perder y prepárate para maratonear con nuestras recomendaciones.',
        profileImg: testi3,
        profileName: 'Christinn A.'
    },
    {
        id: 7,
        category: 'tech',
        img: img7,
        title: 'Blockchain: Más Allá de las Criptomonedas',
        date: '12 Feb 2022',
        description: 'El blockchain ha demostrado ser mucho más que la base de las criptomonedas. En este artículo, exploramos cómo esta tecnología está revolucionando sectores como la logística, la salud y la seguridad. Descubre los usos innovadores del blockchain y cómo podría cambiar la forma en que interactuamos con el mundo digital.',
        profileImg: testi1,
        profileName: 'MKHB'
    },
    {
        id: 8,
        category: 'news',
        img: img8,
        title: 'Las Últimas Innovaciones que No Te Puedes Perder Este Año',
        date: '12 Feb 2022',
        description: 'Descubre las tecnologías y productos más innovadores que están marcando tendencia en 2024. Desde avances en inteligencia artificial hasta gadgets revolucionarios, te contamos todo lo que necesitas saber para estar al día con lo más nuevo en el mercado. Mantente a la vanguardia con nuestras recomendaciones y análisis detallados.',
        profileImg: testi3,
        profileName: 'Christinn A.'
    },
    {
        id: 9,
        category: 'food',
        img: img9,
        title: 'Consejos para Comer Saludable sin Renunciar al Sabor',
        date: '12 Feb 2022',
        description: 'Comer saludable no significa sacrificar el sabor. En este post, te damos consejos prácticos para preparar comidas nutritivas y deliciosas. Aprende a equilibrar tu dieta con ingredientes frescos y técnicas de cocina que realzan los sabores, para que disfrutes de cada bocado mientras cuidas tu salud.',
        profileImg: testi2,
        profileName: 'Pedro P.'
    },
];

const categoryTranslations: { [key: string]: string } = {
    tech: 'Tecnología',
    food: 'Comida',
    news: 'Nuevos',
};

const Post: React.FC = () => {

    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    const filteredPosts = activeFilter === 'all' ? posts : posts.filter(post => post.category === activeFilter);

    return (
        <div className='posts-container'>
            <div className="post-filter container">
                <span className={`filter-item ${activeFilter === 'all' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('all')} data-filter="all">Todos</span>
                <span className={`filter-item ${activeFilter === 'tech' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('tech')} data-filter="tech">Tecnología</span>
                <span className={`filter-item ${activeFilter === 'food' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('food')} data-filter="food">Comida</span>
                <span className={`filter-item ${activeFilter === 'news' ? 'active-filter' : ''}`} onClick={() => handleFilterClick('news')} data-filter="news">Nuevos</span>
            </div>
            <div className="post container">
                {filteredPosts.map(post => (
                    <div key={post.id} className={`post-box ${post.category}`}>
                        <img src={post.img} alt="" className="post-img" />
                        <h2 className="category">{categoryTranslations[post.category]}</h2>
                        <a href="#" className="post-title">{post.title}</a>
                        <span className="post-date">{post.date}</span>
                        <p className="post-description">{post.description}</p>
                        <div className="profile">
                            <img src={post.profileImg} alt="" className="profile-img" />
                            <span className="profile-name">{post.profileName}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;