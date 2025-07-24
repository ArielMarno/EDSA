import '../styles/mapa.css';

const Mapa = () => {
  return (
    <div className='map'>
        <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12447.774283042081!2d-61.332777998800495!3d-38.74205711672814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9592adeb651c0cdf%3A0x9032be1f2d7c74ab!2sEmbotellados%20Dorrego%20S.A.!5e0!3m2!1ses!2sar!4v1751323424776!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    </div>
  )
}

export default Mapa