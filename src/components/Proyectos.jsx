
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import '../../styles/slider.css';
import { useEffect, useState } from 'react';
import config from '../../config';

// import required modules

export default function Proyectos() {
    const [proyectos, setProyectos] = useState([])

    useEffect(() => {

        obtenerDatos();

        async function obtenerDatos() {
            const url = `https://my.api.mockaroo.com/${config.apiKey}`;
            try {
                const datos = await fetch(url);
                const resultados = await datos.json();


                setProyectos(resultados ?? []);
            } catch (error) {
                console.log(error)
            }

        }
    },[])


    // const proyectos = [
    //     {
    //         url: 'https://gensystar.mx',
    //         imagen: "gensystar",
    //         repo: ''
    //     },
    //     {
    //         url: 'https://org-beta-gold.vercel.app/',
    //         imagen: "organizador",
    //         repo: 'https://github.com/DanielPosR/org'
    //     },
    //     {
    //         url: 'https://bienes-raices-venta.netlify.app/',
    //         imagen: "bienes-raices",
    //         repo: ''
    //     },
    //     {
    //         url: 'https://aluraflix-tan.vercel.app/',
    //         imagen: "aluraflix",
    //         repo: 'https://github.com/DanielPosR/AluraFlix'
    //     },
    //     {
    //         url: 'https://cafe-blogweb.netlify.app/',
    //         imagen: "blog-cafe",
    //         repo: ''
    //     },
    //     {
    //         url: 'https://encriptador-alura-texto.netlify.app/',
    //         imagen: "encriptador",
    //         repo: 'https://github.com/DanielPosR/encriptador-alura'
    //     },
    //     {
    //         url: 'https://rocke-and-edm-festival.netlify.app/',
    //         imagen: "festival-rock",
    //         repo: ''
    //     },
    //     {
    //         url: 'https://remarkable-lollipop-1fee64.netlify.app/',
    //         imagen: "presupuesto",
    //         repo: ''
    //     },
    //     {
    //         url: 'https://proyecto-techpro.netlify.app/',
    //         imagen: "techpro",
    //         repo: ''
    //     },
    //     {
    //         url: 'https://registro-vet.netlify.app/',
    //         imagen: "veterinaria",
    //         repo: ''
    //     },
    //     {
    //         url: 'https://danielposr.github.io/AluraShop/index.html',
    //         imagen: "alurageek",
    //         repo: 'https://github.com/DanielPosR/AluraShop'
    //     }
    // ]
    return (
        <section className="contenedor" id='proyectos'>
            <h2 className="heading">Proyectos</h2>


            <Swiper
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={15}
                modules={[Autoplay, Pagination]}
                pagination={{
                    dynamicBullets: true
                }}
                lazy="true"
                className="mySwiper"
                autoplay={{
                    delay: 4000
                }}
                breakpoints={

                    {
                        768: {
                            slidesPerView: 2
                        }
                    }
                }
            >

                {proyectos.map(proyecto => {

                    const { url, imagen, repo } = proyecto;

                    return (
                        <SwiperSlide className='card' key={imagen}>
                            <div className="overlay"></div>

                            <picture>
                                <source srcSet={`/img/proyectos/${imagen}.webp`} type='image/webp' />
                                <img className='img-slider' loading='lazy' src={`/img/proyectos/${imagen}.png`} alt={`Imagen Proyecto - ${imagen}`} />
                            </picture>

                            <div className="card-contenedor">
                                <a href={url} rel='noreferrer' target='_blank' className="card-btn">Demo</a>

                                {repo && <a href={repo} rel='noreferrer' target='_blank' className="card-btn">Repositorio</a>}

                            </div>

                        </SwiperSlide>

                    )
                })}
            </Swiper>

        </section >
    );
}








