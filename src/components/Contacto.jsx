import '../styles/contacto.css';

import logo from '../assets/edsa.webp';

import ubi from '../assets/icons/ub.webp';
import ig from '../assets/icons/ig.webp';
import wsp from '../assets/icons/wp.webp';
import mail from '../assets/icons/mail.webp';

import React, { useState } from 'react';

const Contacto = () => {

    // Estado para almacenar los datos del formulario
      const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: '',
      });
    
      // Manejar cambios en los inputs
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <div className='contacto' id='contacto'>
        <div className='data'>
            <div className='logo'>
                <a href="#inicio"><img src={logo} alt="logo" /></a>
            </div>
            <h5>Capturamos la calidez del sol y la frescura del campo en cada gota de nuestro aceite de girasol, un regalo natural que realza el sabor de tus platos, garantizando calidad y pureza en cada uso.</h5>
            <div className='info'>
                <div className='col'>
                    <div className='ubi'>
                        <a href="https://maps.app.goo.gl/qNNrYSL6WCbqp83G6">
                            <img src={ubi} alt="ubicación" />
                            <p>Parque Industrial Coronel Dorrego Parcela 17</p>
                        </a>
                    </div>
                    <div>
                        <a href="mailto: embotelladosdorregosa@gmail.com">
                            <img src={mail} alt="email" />
                            <p>embotelladosdorregosa@gmail.com</p>
                        </a>
                    </div>
                    
                </div>
                <div className='col'>  
                    <div className='phone'>
                        <a href="https://wa.link/lh2a8m">
                            <img src={wsp} alt="teléfono" />
                            <p>+54 9 2932576513</p>
                        </a>
                    </div>
                    <div className='ig'>
                        <a href="https://www.instagram.com/embotelladosdorrego/">
                            <img src={ig} alt="instagram" />
                            <p>@embotelladosdorrego</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='copy'>
                <div className='line'></div>
                <p>Copyright © 2025 Embotellados Dorrego S.A. <br /> Todos los derechos reservados.</p>
                <p>Diseñado y desarrollado por <a href="https://sunfloweragencia.com/">SunFlower Agencia.</a></p>
            </div>
        </div>
        <form action="https://formspree.io/f/xvgqgzzl" method="POST">
            <div className='form-title'>
                <h4>Contactanos</h4>
                <p>Dejanos tu consulta y te responderemos a la brevedad.</p>
            </div>
            <div className='form-data'>
                <div className='personal-data'>
                    <input type="text" name='nombre' id='nombre' placeholder='Nombre y apellido' value={formData.nombre} autoComplete="off" onChange={handleInputChange} required/> 
                    <input type="number" name='telefono' id='telefono' placeholder='Número de teléfono' value={formData.telefono} autoComplete="off" onChange={handleInputChange} required/>
                </div>
                <select id="motivo" name="oilType" required>
                    <option value="">Motivo del contacto</option>
                    <option value="revendedores">Revendedores</option>
                    <option value="servicios">Servicios</option>
                    <option value="reclamos">Reclamos/Quejas</option>
                </select>
                <textarea name="mensaje" id="mensaje" placeholder='Mensaje' required></textarea>
            </div>
            <button type='submit'>ENVIAR</button>
        </form>
    </div>
  )
}

export default Contacto