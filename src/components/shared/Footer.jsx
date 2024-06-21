import React from 'react'
import './Footer.css'

const Footer = ({portafolio}) => {
  return (
  
    <footer>
        <a href="#inicio" className="arriba">
            <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
        <a href={portafolio?.contacto.whatsapp} target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            <a href={portafolio?.contacto.twitter} target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href={portafolio?.contacto.linkedin} target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={portafolio?.contacto.github} target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href={portafolio?.contacto.email} target="_blank"><i className="bx bxl-gmail"></i></a>
        </div>
        <h4>{portafolio?.footer.info}</h4>
    </footer>
  )
}

export default Footer