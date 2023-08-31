import { Zoom as Animacion } from "react-awesome-reveal";
import styles from '/styles/habilidades.module.css';
import { tituloDinamico } from "../js/funciones";

const Habilidades = () => {

    tituloDinamico('Habilidades');

    const tecnologias = [
        {
            porcentaje: '90%',
            imagen: '/img/logos/html.png',
            nombre: "HTML"
        },
        {
            porcentaje: '90%',
            imagen: '/img/logos/css.png',
            nombre: "CSS"
        },
        {
            porcentaje: '70%',
            imagen: '/img/logos/javascript.png',
            nombre: "JS"
        },
        {
            porcentaje: '70%',
            imagen: '/img/logos/react.png',
            nombre: "ReactJS"
        },
        {
            porcentaje: '60%',
            imagen: '/img/logos/git.png',
            nombre: "Git"
        },
        {
            porcentaje: '50%',
            imagen: '/img/logos/github.png',
            nombre: "Github"
        },
        {
            porcentaje: '50%',
            imagen: '/img/logos/sass.png',
            nombre: "SASS"
        },
        {
            porcentaje: '40%',
            imagen: '/img/logos/php.png',
            nombre: "PHP"
        },
        {
            porcentaje: '40%',
            imagen: '/img/logos/mysql.png',
            nombre: "MySQL"
        },
        {
            porcentaje: '30%',
            imagen: '/img/logos/gulp.png',
            nombre: "GULP"
        }
    ]


    const habilidades = [
        {
            titulo: "Flexibilidad",
            imagen: '/img/habilidades/cambio.png',
            categoria: 'desarrollo'
        },
        {
            titulo: "Autonomía en el aprendizaje",
            imagen: '/img/habilidades/aprendizaje.png',
            categoria: 'desarrollo'
        },
        {
            titulo: "Capacidad de autogestión",
            imagen: '/img/habilidades/autogestion.png',
            categoria: 'interpersonal'
        },
        {
            titulo: "Capacidad para dar y recibir retroalimentación",
            imagen: '/img/habilidades/feedback.png',
            categoria: 'interpersonal'
        },
        {
            titulo: "Proactividad",
            imagen: '/img/habilidades/proactivo.png',
            categoria: 'desarrollo'
        },
        {
            titulo: "Resolución de problemas",
            imagen: '/img/habilidades/creativo.png',
            categoria: 'desarrollo'
        },
        {
            titulo: "Atención al detalle",
            imagen: '/img/habilidades/detalle.png',
            categoria: 'interpersonal'
        },
        {
            titulo: "Orientación a resultados",
            imagen: '/img/habilidades/enseñar.png',
            categoria: 'interpersonal'
        },
        {
            titulo: "Comunicación efectiva",
            imagen: '/img/habilidades/comunicacion.png',
            categoria: 'desarrollo'
        },
        {
            titulo: "Capacidad para trabajar en equipo",
            imagen: '/img/habilidades/equipo.png',
            categoria: 'interpersonal'
        },
        {
            titulo: "Capacidad para trabajar de manera individual",
            imagen: '/img/habilidades/individual.png',
            categoria: 'desarrollo'
        }
    ]

    return (
        <>
            <main className={`contenido-centrado ${styles.main}`}>

                <h1 className="heading">Tecnologías</h1>

                <div className={`${styles.tecnologias} contenedor`}>

                    <Animacion>
                        {tecnologias.map((tecnologia) => {
                            const { porcentaje, nombre, imagen } = tecnologia;

                            const anchoBarra = {
                                width: `${porcentaje}`
                            }

                            return (

                                <div key={nombre} className={styles.skill}>

                                    <img src={imagen} />
                                    
                                    <div className={styles.progress}>
                                       
                                        <div
                                            style={anchoBarra}
                                            className={styles.progress_bar}
                                        >{`${porcentaje}  ${nombre}`}</div>
                                    </div>
                                </div>

                            )
                        })}
                    </Animacion>
                </div>
            </main>

            <section className={styles.otras_habilidades}>

                <div className="contenedor contenido-centrado">
                    <h2 className={styles.heading}>Habilidades</h2>


                    <div className={styles.contenedor_habilidades}>

                        <div className={styles.habilidades}>

                            <ul>
                                {habilidades.map((habilidad) => {

                                    const { titulo, imagen, categoria } = habilidad;

                                    if (categoria === 'desarrollo') {

                                        return (

                                            <li key={titulo} className={styles.habilidad}>
                                                <img src={imagen} alt={`Icono sobre ${titulo}`} />
                                                <p>{titulo}</p>
                                            </li>

                                        )
                                    }
                                })}
                            </ul>

                        </div>


                        <div className={styles.habilidades}>

                            <ul>
                                {habilidades.map((habilidad) => {

                                    const { titulo, imagen, categoria } = habilidad;

                                    if (categoria === 'interpersonal') {

                                        return (
                                            <li key={titulo} className={styles.habilidad}>
                                                <img src={imagen} alt={`Icono sobre ${titulo}`} />
                                                <p>{titulo}</p>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>

                        </div>

                    </div>
                </div>

            </section>


            <section className="contenedor contenido-centrado">
                <h2 className="heading">Idiomas</h2>

                <div className={styles.idiomas}>

                    <div className={styles.idiomma}>

                        <h3 className="heading">Español Nativo</h3>
                    </div>

                    <div className={styles.idioma}>

                        <h3 className="heading">Inglés - B2 Intermedio - Avanzado </h3>

                        <iframe src="/certificado.pdf" importance="low" width={800} height={700}></iframe>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Habilidades