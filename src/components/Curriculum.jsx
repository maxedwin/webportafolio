import React from 'react'
import './Curriculum.css'

const curriculum = ({portafolio}) => {
  return (
    
    <section id="curriculum" className="curriculum">
        <div className="contenido-seccion">
            <h2>{portafolio?.curriculum}</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>{portafolio?.acerca_de_mi.titulo4}</h3>

                    {portafolio?.acerca_de_mi.educacion.map((item, index) => (
                <div className="item izq" key={index}>
                    <h4>{item.titulo}</h4>
                    <span className="casa">{item.institucion}</span>
                    <span className="fecha">{item.fecha}</span>
                    <p>{item.contenido}</p>
                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
            ))}
                    
                </div>

                <div className="col derecha">
                    <h3>{portafolio?.acerca_de_mi.titulo3}</h3>

                    {portafolio?.acerca_de_mi.experiencia.map((item, index) => (
                <div className="item der" key={index}>
                    <h4>{item.puesto}</h4>
                    <span className="casa">{item.empresa}</span>
                    <span className="fecha">{item.year}</span>
                    <p>{item.funciones}</p>
                    <div className="conectord">
                        <div className="circulod"></div>
                    </div>
                </div>
            ))}

                </div>
            </div>
        </div>
    </section>
  )
}

export default curriculum