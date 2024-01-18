import '../../styles/habilidades.css';

export default function Habilidades() {

    const habilidades = [
        {
            titulo: 'Flexibilidad',
            imagen: 'cambio',
            lado: 'izq'
        },
        {
            titulo: 'Autonomía en el aprendizaje',
            imagen: 'aprendizaje',
            lado: 'izq'
        },
        {
            titulo: 'Proactivo',
            imagen: 'proactivo',
            lado: 'izq'
        },
        {
            titulo: 'Resolución de problemas',
            imagen: 'creativo',
            lado: 'izq'
        },
        {
            titulo: 'Comunicación efectiva',
            imagen: 'comunicacion',
            lado: 'izq'
        },
        {
            titulo: 'Capacidad para trabajar de manera individual',
            imagen: 'individual',
            lado: 'izq'
        },
        {
            titulo: 'Capacidad de autogestión',
            imagen: 'autogestion',
            lado: 'der'
        },
        {
            titulo: 'Capacidad para dar y recibir retroalimentación',
            imagen: 'feedback',
            lado: 'der'
        },
        {
            titulo: 'Atención al detalle',
            imagen: 'detalle',
            lado: 'der'
        },
        {
            titulo: 'Orientación a resultados',
            imagen: 'enseñar',
            lado: 'der'
        },
        {
            titulo: 'Capacidad para trabajar en equipo',
            imagen: 'equipo',
            lado: 'der'
        }
    ]


    return (
        <>

            <section id='habilidades'>

                <h2 className="heading">Habilidades</h2>

                <div className="habilidades">

                    <div className="contenido contenedor">

                        <div className="contenido-izq">
                            {habilidades.map(habilidad => {
                                const { titulo, imagen, lado } = habilidad;

                                return (
                                    (lado === 'izq'
                                        &&
                                        <div className="habilidad" key={imagen}>
                                            <picture>
                                                <source srcSet={`/img/habilidades/${imagen}.webp`} type='image/webp' />
                                                <img loading='lazy' width={200} height={50} src={`/img/habilidades/${imagen}.png`} alt={`Imagen sobre ${titulo}`} />
                                            </picture>

                                            <p>{titulo}</p>
                                        </div>)
                                )
                            })}
                        </div>


                        <div className="contenido-der">
                            {habilidades.map(habilidad => {
                                const { titulo, imagen, lado } = habilidad;

                                return (
                                    (lado === 'der'
                                        &&
                                        <div className="habilidad" key={imagen}>
                                            <picture>
                                                <source srcSet={`/img/habilidades/${imagen}.webp`} type='image/webp' />
                                                <img loading='lazy' width={200} height={50} src={`/img/habilidades/${imagen}.png`} alt={`Imagen sobre ${titulo}`} />
                                            </picture>

                                            <p>{titulo}</p>
                                        </div>)
                                )
                            })}
                        </div>

                    </div>
                </div>



            </section>

        </>
    )
}