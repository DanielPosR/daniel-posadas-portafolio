import '../../styles/tecnologias.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import VisibilitySensor from 'react-visibility-sensor';

//* ANIMACIONES
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Tecnologias() {

    const tecnologias = [
        {
            nombre: 'HTML',
            color: '#FF6D00',
            numero: '90',
            img: 'html'
        },
        {
            nombre: 'CSS',
            color: '#32AADB',
            numero: '85',
            img: 'css'
        },
        {
            nombre: 'JS',
            color: '#E9D31B',
            numero: '70',
            img: 'js'
        },
        {
            nombre: 'React',
            color: '#149ECA',
            numero: '70',
            img: 'react'
        },
        {
            nombre: 'NextJS',
            color: '#000',
            numero: '50',
            img: 'next'
        },
        {
            nombre: 'Git',
            color: '#F34F29',
            numero: '60',
            img: 'git'
        },
        {
            nombre: 'Github',
            color: '#7F43C5',
            numero: '60',
            img: 'github'
        },
        {
            nombre: 'PHP',
            color: '#465489',
            numero: '30',
            img: 'php'
        },
        {
            nombre: 'MySQL',
            color: '#E38F03',
            numero: '30',
            img: 'sql'
        },
        {
            nombre: 'Sass',
            color: '#CC669C',
            numero: '30',
            img: 'sass'
        },
        {
            nombre: 'Gulp',
            color: '#EA4A4C',
            numero: '20',
            img: 'gulp'
        },
    ]



    return (

        <section className='tecnologias' id='tecnologias'>

            <h2 className="heading">Tecnologías</h2>

            <div className="grid contenedor">

                {tecnologias.map(tecnologia => {
                    const { nombre, color, numero, img } = tecnologia;

                    return (
                        <div
                            className="tecnologia"
                            key={nombre}
                            data-aos='fade-up'
                            data-aos-duration="2000"
                        >
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const porcentaje = isVisible ? numero : 0;

                                    return (
                                        <CircularProgressbarWithChildren
                                            value={porcentaje}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                pathColor: `${color}`,
                                                trailColor: '#e1e1e1',
                                                strokeLinecap: 'butt'
                                            })}
                                        >
                                            <img src={`/img/${img}.svg`} alt="Icono html" />
                                            <p className='texto'>{nombre}</p>
                                            <p className='porcentaje'>{numero}%</p>
                                        </CircularProgressbarWithChildren>
                                    )
                                }}
                            </VisibilitySensor>

                        </div>
                    )


                })}



            </div>
        </section>

    )
}