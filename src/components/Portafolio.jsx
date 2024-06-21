import React from 'react'
import './Portafolio.css'
import images from '../assets/js/imgPortafolio';

const portafolio = ({portafolio}) => {
  return (
  
    <section id="portfolio" className="portfolio">
        <div className="contenido-seccion">
            <h2>{portafolio?.portafolio.titulo}</h2>
            <div className="galeria">

            {portafolio?.portafolio.portafolio.map((proyecto, index) => (
            <div className="proyecto" key={index}>
              <img src={`${images[proyecto.img]}`} alt={proyecto.titulo} />
              <div className="overlay">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.tecnologia}</p>
                <a href={proyecto.link} target="_blank" rel="noopener noreferrer">{portafolio?.portafolio.label_link}</a>
              </div>
            </div>
          ))}

            
            </div>
        </div>
    </section>
  )
}

export default portafolio