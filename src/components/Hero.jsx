import '../../styles/hero.css';

export default function Hero() {
    return (
        <>

            <main
                className="seccion contenedor animate__animated animate__pulse"
            >

                <div>
                    <h1>¡Hola! Mi nombre es <span className="nombre">Daniel Posadas Rangel</span></h1>
                    <p className='parrafo'>Soy Desarrollador Front End</p>
                </div>

                <img src="/img/hero.svg" alt="Imagen ilustrativa" />
            </main>

            <div className="sobre">
                <div className="contenedor">
                    <p>
                        Mi enfoque se centra en la parte visual y perceptible de las páginas web, dando vida a animaciones, implementando transiciones fluidas, y cuidando una paleta de colores armoniosa, así como tamaños y fuentes que aportan personalidad y carácter. Mi inmersión en el emocionante mundo de la programación y desarrollo web desde 2020 ha sido respaldada por mi entusiasmo y dedicación, lo cual se refleja en el portafolio que he creado para compartir mis conocimientos.
                    </p>
                </div>

            </div>
        </>
    )
}
