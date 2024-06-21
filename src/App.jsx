import { useEffect, useState } from 'react';
import infoPortafolio from '../infopage.json';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Portafolio from './components/Portafolio';
import Contact from './components/Contact';
import Footer from './components/shared/Footer';

function App() {
const [language, setLanguage] = useState("es");
const [portafolio, setPortafalio] = useState();

const handleLanguage = (lang) => {
  setLanguage(lang);
};
  
const fetchPortafolio = async ()=> {
  try {
    setPortafalio(infoPortafolio[language].header.menu)
  } catch (error) {
    
  }
}


  useEffect(() => {
    fetchPortafolio();
  
  }, [language]);
  

  return (
    <>
      <div>
        <Navbar
          portafolio = {portafolio}
          onData = {handleLanguage}
        />
        <Home
          portafolio = {portafolio}
        />
      </div>

      <About
        portafolio = {portafolio}
      />

      <Skills 
        portafolio = {portafolio}
      />

      <Curriculum
        portafolio = {portafolio}
      />

      <Portafolio
        portafolio = {portafolio}
      />

      <Contact 
        portafolio = {portafolio}
      />

      <Footer
      portafolio = {portafolio}
      />
 
    </>
  )
}

export default App
