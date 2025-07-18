import '../styles/navbar.css';
import { useState } from 'react';
import Menu from './Menu';
import EDSA from '../assets/edsa.webp';
import EDSARSP from '../assets/edsarsp.webp';

const Navbar = () => {

  //establecer el opuesto cuando se identifica si esta abierto el menu
    const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
        
    //booleano para apertura y cierre del menu desplegable al hacer click en los links del navegador
    const handleLinkClick = () => {
      setIsOpen(false);
    };

  return (
    <div className='navbar'>
        <main>
            <picture>
                <source media="(min-width: 1026px)"
                srcSet={EDSA} />
                <img src={EDSARSP} alt="logo" />
            </picture>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a href="#empresa" onClick={handleLinkClick}>Empresa</a>
                <a href="#productos" onClick={handleLinkClick}>Productos</a>
                <a href="#servicios" onClick={handleLinkClick}>Servicios</a>
                <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
            </nav>
            <div className='burguer'>
                <Menu toggleMenu={toggleMenu} isOpen={isOpen}/>
            </div>
        </main>
    </div>
  )
}

export default Navbar