import '../styles/empresa.css';
import empresa from '../assets/empresa.webp';

const Empresa = () => {
  return (
    <div className='empresa' id='empresa'>
        <picture>
            <img src={empresa} alt="fabrica" data-aos="fade-right"/>
        </picture>
        <article>
            <h2 data-aos="fade-left">Embotellados Dorrego S.A.</h2>
            <div className='empresa-line' data-aos="fade-left"></div>
            <p data-aos="fade-left">Somos una empresa fundada en Agosto de 2022 que inició formalmente sus actividades el 1ero de febrero de 2025.</p> 
            <p data-aos="fade-left">Estamos ubicados en el parque Industrial de <span>Coronel Dorrego</span>, ubicación estratégica por la cercanía con la aceitera <span>Industrias Grindoil S.A</span>, empresa proveedora para nuestro proceso productivo.</p>
        </article>
    </div>
  )
}

export default Empresa