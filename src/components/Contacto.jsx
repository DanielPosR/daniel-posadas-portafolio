import Formulario from './Formulario';
import '../../styles/contacto.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Social from './Social';
AOS.init();

export default function Contacto() {
    return (
        <section className='contenedor seccion-contacto' id="contacto">

            <h2 className="heading">Contacto</h2>

            <div data-aos="zoom-in">
                <Social />
            </div>

            <div data-aos="zoom-in" style={{ width: '100%' }}>
                <Formulario />
            </div>


        </section>
    )
}
