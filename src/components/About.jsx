import React from 'react';
import './About.css';
const About = ({portafolio}) => {

    const handleDownload = () => {
        // Reemplaza la URL de descarga con el enlace directo de descarga de Google Drive
        const fileUrl = portafolio?.descargar.link;
        window.open(fileUrl, '_blank');
      };
    

  return (
 
    <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>{portafolio?.acerca_de_mi.titulo}</h2>
            <p><span>{portafolio?.acerca_de_mi.titulo2}
            </span> {portafolio?.acerca_de_mi.contenido}</p>

            <div className="fila">
              
                <div className="col">
                    <h3>{portafolio?.acerca_de_mi.datos[0].titulo}</h3>
                    <ul>
                        <li>
                            <strong>{portafolio?.acerca_de_mi.datos[1].email}</strong>
                            {portafolio?.acerca_de_mi.datos[0].email}
                        </li>
                        <li>
                            <strong>{portafolio?.acerca_de_mi.datos[1].telefono}</strong>
                            {portafolio?.acerca_de_mi.datos[0].telefono}
                        </li>
                        <li>
                            <strong>{portafolio?.acerca_de_mi.datos[1].fecha_nacimiento}</strong>
                            {portafolio?.acerca_de_mi.datos[0].fecha_nacimiento}
                        </li>
               
                        <li>
                            <strong>{portafolio?.acerca_de_mi.datos[1].profesion}</strong>
                            <span>{portafolio?.acerca_de_mi.datos[0].profesion}</span>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h3>{portafolio?.acerca_de_mi.intereses[0].titulo}</h3>
                    <div className="contenedor-intereses">
                    <div className="interes">
                            <i className="fa fa-code"></i>
                            <span>{portafolio?.acerca_de_mi.intereses[0].interes1}</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-headphones"></i>
                            <span>{portafolio?.acerca_de_mi.intereses[0].interes3}</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-plane"></i>
                            <span>{portafolio?.acerca_de_mi.intereses[0].interes2}</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-person-hiking"></i>
                            <span>{portafolio?.acerca_de_mi.intereses[0].interes4}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <button onClick={handleDownload}>
            {portafolio?.descargar.titulo} <i className="fa-solid fa-download"></i>
                <span className="overlay"></span>
            </button>
        </div>
    </section>
  )
}

export default About