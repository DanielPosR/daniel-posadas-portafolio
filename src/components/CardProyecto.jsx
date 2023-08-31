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
                    <img href='#vista-previa' src={imagen} alt={`Imagen proyecto: ${nombre}`} />
                </a>

            </div>

        </>
    )
}

export default CardProyecto;