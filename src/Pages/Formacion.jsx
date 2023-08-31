import { Slide as Animacion } from "react-awesome-reveal";
import { tituloDinamico } from "../js/funciones";

import styles from '/styles/formacion.module.css';

function Formacion() {
    tituloDinamico('Formación')


    const formaciones = [
        {
            lugar: 'Universidad UCAD',
            titulo: 'Ingeniería en Sistemas Computacionales',
            periodo: '2022 - En Curso',
            imagen: '/logoUCAD.svg',
            certificado: '',
            descripcion: "Como estudiante de esta carrera, al culminar mis estudios, habré realizado el diplomado de Programación en Java, Diseño de Sistemas Digitales, Redes y Telecomunicaciones, y Gestión de Innovación y Emprendimiento."
        },
        {
            lugar: 'ALURA Latam',
            titulo: 'Especializacion Front End con React JS',
            periodo: '2022 - 2023',
            imagen: '/logo-alura.svg',
            certificado: 'https://app.aluracursos.com/degree/certificate/227067c9-9f7a-4cf9-a4c7-3ee08fb6a98b',
            descripcion: "Durante esta formación tomé diversos cursos, tanto de programación como de desarrollo personal y metodologías ágiles"
        },
        {
            lugar: 'UDEMY',
            titulo: 'Java Script Moderno más proyectos',
            periodo: '2021 - 2022',
            imagen: '/logo-udemy.svg',
            certificado: 'https://drive.google.com/file/d/18oIa4Q1KH-avQyzcWEjhhs7yj7jSnWRA/view?usp=drive_link',
            descripcion: "Curso de Java Script que abarca desde los temas mas básicos como la creacion de variables, tipos de datos, funciones, iteradores y más. Hasta la creación de un proyecto Full Stack"
        },
        {
            lugar: 'UDEMY',
            titulo: 'CSS La guía completa más proyectos',
            periodo: '2022',
            imagen: '/logo-udemy.svg',
            certificado: 'https://drive.google.com/file/d/1F2yhV0eidhnyGmqle4S65BtpZ_oBEyTP/view?usp=drive_link',
            descripcion: "Curso completo de CSS3 que contempla los temas más importantes como son Flex box, Grid, transiciones, Diseño Responsivo, Gulp y SASS"
        },
        {
            lugar: 'UDEMY',
            titulo: 'Desarrollo Web Completo con HTML, CSS, SASS, PHP, MySQL',
            periodo: 'En Curso',
            imagen: '/logo-udemy.svg',
            certificado: '',
            descripcion: "Aun en curso, adquiriendo conocimientos sobre todo lo relacionado con el desarrolo web, desde HTML hasta la creacion de un proyecto con PHP y conección a base de datos de MySQL"
        },
        {
            lugar: 'UDEMY',
            titulo: 'React JS La guia completa Hooks, Redux, Context, MERN',
            periodo: 'En Curso',
            imagen: '/logo-udemy.svg',
            certificado: '',
            descripcion: "Aun en curso, adquiriendo conocimientos sobre todo lo relacionado con el desarrolo web, desde HTML hasta la creacion de un proyecto con PHP y conección a base de datos de MySQL"
        }
    ];

    return (
        <Animacion>

            <main className="contenedor contenido-centrado">

                <h1 className="heading">Formación Académica</h1>

                <div className={styles.formaciones}>

                    <p className={`${styles.parrafo} p1`}>
                        En 2020 decidí adentrarme en el mundo de la programación por primera vez. Y desde entonces, he dedicado tiempo y esfuerzo a mi formación, explorando diversas áreas de la tecnología web.
                    </p>



                    {formaciones.map(formacion => {

                        const { lugar, titulo, periodo, imagen, certificado } = formacion;

                        return (

                            <div className={styles.card} key={titulo}>

                                <img className={styles.imagen} src={imagen} alt={`Logo ${lugar}`} />

                                <div className={`${styles.card__content}`}>

                                    <p className={styles.card__titulo}>{titulo}</p>

                                    <div className={styles.subtitulo}>

                                        <p className={styles.card__lugar}>{lugar}</p>
                                        <p className={styles.card__periodo}>{periodo}</p>

                                    </div>

                                    {/*<p className={styles.card__descripcion}>{descripcion}</p> */}

                                    {certificado && <a className={`${styles.btn_card}`} href={certificado} target="_blank" rel="noopener noreferrer">Certificado</a>}

                                </div>
                            </div>
                        );
                    })}

                    <p className={`${styles.parrafo} ${styles.p2}`}>
                        A lo largo de mi trayecto, he completado diversos cursos especializados que me han dotado de sólidos conocimientos en HTML, CSS, JavaScript y React.js.
                    </p>

                    <p className={`${styles.parrafo} ${styles.p3}`}>
                        Más recientemente, me he embarcado en el aprendizaje de PHP y MySQL, ampliando así mi conjunto de habilidades y mi capacidad para crear soluciones web más versátiles y dinámicas.
                    </p>
                </div>

                <a className="btn" href="https://www.linkedin.com/in/daniel-posadas-rangel/details/certifications/" target="_blank" rel="noopener noreferrer">Ver Certificados</a>

            </main>

        </Animacion>
    )
}

export default Formacion;