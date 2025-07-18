import '../styles/productos.css';
import { useInView } from 'react-intersection-observer';
import simple from '../assets/productos/900ml.webp';
import medio from '../assets/productos/5lts.webp';
import grande from '../assets/productos/10lts.webp';
import edsa from '../assets/productos/video-edsa.webm';


const Productos = () => {

  const { ref, inView } = useInView({
  threshold: 0.5, // Se activa cuando el 50% del video es visible
  triggerOnce: true, // Solo activa una vez
});


  return (
    <div className='productos' id='productos'>
      <div className='content'>
        <h2 data-aos="fade-right">Nuestros Productos</h2>
        <div className='productos-line' data-aos="fade-right"></div>
        <div className='motivos'>
            <div className='simple' data-aos="fade-right" data-aos-offset="400">
              <picture>
                <img src={simple} alt="900ml" />
              </picture>
              <h4>Botella 900 Mls.</h4>
            </div>
            <div className='mediano' data-aos="fade-right" data-aos-offset="350">
              <picture>
                <img src={medio} alt="5lt" />
              </picture>
              <h4>Bidón 5 Litros</h4>
            </div>
            <div className='grande' data-aos="fade-right" data-aos-offset="300">
                <picture>
                  <img src={grande} alt="10lt" />
                </picture>
                <h4>Bidón 10 Litros</h4>
            </div>
        </div>
        <p data-aos="fade-right">Comercializamos aceite refinado 100% girasol marca EDSA, virgen y comestible, prensado en frío sin solventes ni otros agregados. Regulado y aprobado por las organizaciones competentes.<br /><span>RNE: 02-042.561  RNPA: 02-739185.</span></p>
        <div className='sumar'>
          <h4 data-aos="fade-right">¿Querés sumar nuestro aceite a tu comercio?</h4>
            <a href="https://wa.link/lh2a8m"><span>CONTACTANOS</span></a> 
        </div>
      </div>
      
      <aside ref={ref}>
        {inView && (
          <video
            src={edsa}
            loop
            autoPlay
            muted
            controls={false}
            preload="auto"
          />
        )}
      </aside>

    </div>
  );
};

export default Productos;
