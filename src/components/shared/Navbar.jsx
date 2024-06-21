import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ portafolio, onData }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isLanguageActive, setIsLanguageActive] = useState(false);

  const handleLanguageToggle = () => {
    setIsLanguageActive(!isLanguageActive);
    onData(isLanguageActive ? "es" : "en");
  }

  const mostrarOcultarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const seleccionar = () => {
    setMenuVisible(false);
  };



  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">&lt;EDWIN/&gt;</a>
        </div>
        <nav id="nav" className={menuVisible ? 'responsive' : ''}>
          <ul>
            <li><a href="#inicio" onClick={seleccionar}>{portafolio?.inicio}</a></li>
            <li><a href="#sobremi" onClick={seleccionar}>{portafolio?.acerca_de_mi.titulo}</a></li>
            <li><a href="#skills" onClick={seleccionar}>{portafolio?.habilidades.titulo}</a></li>
            <li><a href="#curriculum" onClick={seleccionar}>{portafolio?.curriculum}</a></li>
            <li><a href="#portfolio" onClick={seleccionar}>{portafolio?.portafolio.titulo}</a></li>
            <li><a href="#contacto" onClick={seleccionar}>{portafolio?.contacto.titulo}</a></li>
          </ul>
        </nav>


        <div className="navbar__toggle--language">
                  <input
                    type="checkbox"
                    id="language-toggle"
                    className="navbar__toggle--language-input"
                    checked={isLanguageActive}
                    onChange={handleLanguageToggle}
                  />
                  <label
                    htmlFor="language-toggle"
                    className="navbar__toggle--language-label"
                  ></label>
                </div>

                <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

      </header>
    </div>
  );
};

export default Navbar;
