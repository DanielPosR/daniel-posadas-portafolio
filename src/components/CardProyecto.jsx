import styles from '/styles/card.module.css';

const CardProyecto = ({ imagen, id, nombre, mostrarVista }) => {
    return (
        <>
            <div
                onClick={(e) => {
                    mostrarVista(e, id);
                }}>
                <a
                    className={styles.card}
                >
                    <picture>
                        <source srcSet={`/img/proyectos/${imagen}.webp`} type="image/webp" />
                        <img href='#vista-previa' src={`/img/proyectos/${imagen}.png`} alt={`Imagen proyecto: ${nombre}`} width={'100%'} height={'auto'}/>
                    </picture>
                </a>

            </div>

        </>
    )
}

export default CardProyecto;