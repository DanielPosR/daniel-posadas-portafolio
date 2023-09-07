import styles from '/styles/sobre.module.css';
import { TypeAnimation } from 'react-type-animation';

//* IMAGENES
import imagen from '/programador.svg';
import { tituloDinamico } from '/src/js/funciones';

function SobreMi() {

    tituloDinamico('Inicio');

    return (
        <>
            <main className={`${styles.main}`}>

                <div className={styles.contenido_hero}>

                    <div className="contenedor">
                        <h2>
                            <TypeAnimation
                                sequence={
                                    [
                                        "¡Hola! Soy Daniel Posadas Rangel",
                                        1500,
                                        "Soy Desarrollador Web",
                                        1500,
                                        "Soy Desarrollador Front End",
                                        1500,
                                        "Estudiante de Ingeniería en Sistemas",
                                        1500,
                                        "Soy De la Ciudad de México",
                                        1500,
                                    ]
                                }
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '3rem', color: 'var(--primario)', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h2>



                        <div className={styles.informacion}>

                            <div className={styles.texto}>

                                <p className='parrafo'>Desde la vibrante Ciudad de México y con {new Date().getFullYear() - 1990} años de edad, me adentré en el apasionante mundo de la programación y el desarrollo web en 2020. Con entusiasmo y dedicación, he creado este portafolio para compartir mis conocimientos y logros en este emocionante viaje.</p>

                                <p className='parrafo'>¡Te invito a explorar mi trabajo y proyectos!</p>


                            </div>

                        </div>
                    </div>
                </div>

            </main>



            <section className={`contenido-centrado ${styles.section}`}>
                <h1 className='heading'>Más Sobre Mi</h1>

                <div className={`contenedor ${styles.sobre}`}>

                    <picture>
                        <source srcSet="/img/sobremi.webp" type="image/webp" />
                        <img loading="lazy" src="/img/sobremi.jpg" alt="Imagem sobre mi"/>
                    </picture>

                    <div>
                        <p>Mi apasionante viaje en el mundo de la programación comenzó en el año 2020.</p>
                        <p>Mi enfoque se centra en la parte visual y perceptible de las páginas web. Las animaciones que cobran vida, las transiciones fluidas, la paleta de colores armoniosa, los tamaños y fuentes que aportan personalidad y carácter.</p>
                        <p>Siempre estoy inmerso en la exploración y el dominio de nuevas tecnologías, herramientas y lenguajes de programación. Esto para poder ofrecer soluciones más allá de los requerimientos iniciales.</p>
                    </div>

                </div>
            </section>




            <div className={styles.bg_sociales}>

                <div className={`${styles.sociales} contenedor`}>
                    <a className={styles.enlace} target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/daniel-posadas-rangel/'>
                        <img src='/img/logos/linkedin.png' alt="Enlace a Linkedin" width={100} height={300} />
                        <p>Linkedin</p>
                    </a>

                    <a className={styles.enlace} target='_blank' rel="noopener noreferrer" href='https://github.com/DanielPosR'>
                        <img src='/img/logos/github.png' alt="Enlace a Linkedin" width={100} height={300} />
                        <p>GitHub</p>
                    </a>

                    <a className={styles.enlace} target='_blank' rel="noopener noreferrer" href='https://drive.google.com/file/d/1FtdFKEKFNTghjqud6vPP44WWvOe5-4VB/view?usp=sharing'>
                        <img src='/img/logos/cv.png' alt="Enlace a Linkedin" width={100} height={300} />
                        <p>Mi CV</p>
                    </a>

                </div>
            </div>
        </>

    )
}

export default SobreMi