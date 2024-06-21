import React from 'react'
import './Skills.css';

const Skills = ({portafolio}) => {
  return (
 
    <section className="skills" id="skills">
        <div className="contenido-seccion">
            <h2>{portafolio?.habilidades.titulo}</h2>
           
        </div>


        <div className={`cards-container`}>

        <div className={`card`}>
          <h3 className='bx bx-code' >{portafolio?.habilidades.frontend_titulo}</h3>
          <br/><br/>
          <p>{portafolio?.habilidades.frontend_text}</p>
          <div className="card__skills__container">
  {portafolio?.habilidades.backend &&
    Object.entries(portafolio?.habilidades.frontend[0]).map(([key, value], index) => (
      <div className="card__skills__container" key={`${key}-${index}`}> {/* Agregar key único */}
        <div className="card__skills">
          <i className={`bx bxl-${value.toLowerCase()}`}></i>
          <p className="text__skills">{value}</p>
        </div>
      </div>
    ))}
</div>


        </div>

        
        <div className={`card`}>
          <h3 className='bx bxs-data' >{portafolio?.habilidades.backend_tiulo}</h3>
          <br/><br/>
          <p>{portafolio?.habilidades.backend_text}</p>
          <div className="card__skills__container">
  {portafolio?.habilidades.backend &&
    Object.entries(portafolio.habilidades.backend[0]).map(([key, value], index) => (
      <div className="card__skills__container" key={`${key}-${index}`}>
        <div className="card__skills">
          <i className={`bx bxl-${value.toLowerCase()}`}></i>
          <p className="text__skills">{value}</p>
        </div>
      </div>
    ))}
</div>

        </div>


      </div>

    </section>

  )
}

export default Skills