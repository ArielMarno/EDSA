import '../styles/inicio.css';
import Navbar from './Navbar';
import SliderRSP from './SliderRSP';
import Slider from './Slider';

const Inicio = () => {
  
  return (
    <div className='inicio' id='inicio'>
      <div className='inicio-bg'>
        <Navbar />
        <div className='slider'><Slider /></div>
        <div className='slider-rsp'><SliderRSP /></div>
        <div className='inicio-title'>
          <h1 data-aos="zoom-in">CALIDAD E INNOVACIÓN <br />EN CADA PROCESO</h1>
          <div className='inicio-title_line' data-aos="zoom-in"></div>
          <h4 data-aos="zoom-in">Envasado y distribución de aceite refinado <span>100% de girasol</span> destinado principalmente al canal gastronómico.</h4>
          <a href='https://wa.link/lh2a8m' className="inicio-btn">
            <span className="liquid"></span>  
            <span className="btn-txt">CONOCENOS</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Inicio