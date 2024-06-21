import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactImg from '../img/contact.png';

const Contact = ({ portafolio }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jwq4pwp', 'template_05c192p', form.current, 'Jc2i8XdwKWTQPTo93')
      .then(
        () => {
          toast.success(portafolio?.contacto.success);
          form.current.reset();
        },
        (error) => {
          toast.error(portafolio?.contacto.error);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>{portafolio?.contacto.titulo}</h2>
        <div className="fila">
          <div className="col">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder={portafolio?.contacto.placeholder_name} name="user_name" required/>
              <input type="email" placeholder={portafolio?.contacto.placeholder_email} name="user_email" required/>
              <input type="text" placeholder={portafolio?.contacto.placeholder_subject} name="subject" required/>
              <textarea name="message" cols="30" rows="10" placeholder={portafolio?.contacto.placeholder_message} required></textarea>
              <button type="submit">
                {portafolio?.contacto.label_button}
                <i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </form>
          </div>
          <div className="col">
          <img src={contactImg} alt=""/>
            <div className="info">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  {portafolio?.acerca_de_mi.datos[0].ubicacion}
                </li>
                <li>
                <a href='https://wa.link/3hioik' className='decoration-link'>
                  <i className="fa-brands fa-whatsapp"></i>
                  {portafolio?.acerca_de_mi.datos[0].telefono}</a>
                </li>
                <li>
                <a href="mailto:maxedwin8@gmail.com" className="decoration-link">
                  <i className="fa-solid fa-envelope"></i>
                   {portafolio?.acerca_de_mi.datos[0].email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
