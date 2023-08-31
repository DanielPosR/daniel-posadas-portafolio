import Logo from "./Logo";
import styles from '/styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={`${styles.footer}`}>

            <div className={`contenedor ${styles.contenido}`}>
                <Logo />

                <p>Daniel Posadas Rangel. Todos los derechos reservados {new Date().getFullYear()} &copy; </p>
            </div>

        </footer>
    )
}
