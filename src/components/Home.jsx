import React from 'react'
import './Home.css';
import avatar from '../img/AVATAR1.png'
const Home = ({portafolio}) => {
  return (
    <section id="inicio" className="inicio">
    <div className="contenido-banner">
        <div className="contenedor-img">
            <img src={avatar} alt="" className='avatar' />
        </div>
     
        <h1>{portafolio?.acerca_de_mi.titulo2}</h1>
        <h2>{portafolio?.acerca_de_mi.subcontenido}</h2>
        <div className="redes">
      
            <a href={portafolio?.contacto.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            <a href={portafolio?.contacto.twitter} target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href={portafolio?.contacto.linkedin} target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={portafolio?.contacto.github} target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href={portafolio?.contacto.email} target="_blank"><i className="bx bxl-gmail"></i></a>
        </div>
    </div>
</section>

  )
}

export default Home