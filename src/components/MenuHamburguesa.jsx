import { useEffect, useState } from "react";
import styles from '/styles/menu.module.css';
import { Link } from "react-router-dom";


export default function MenuHamburguesa() {

    const [modoOscuro, setModoOscuro] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    function cambiarTema() {

        if (!modoOscuro) {
            document.body.classList.add('modo-claro');
        } else {
            document.body.classList.remove('modo-claro');
        }
    }




    return (
        <div className={`${styles.menuBtn} ${isActive ? `${styles.active}` : ''}`} onClick={toggleMenu}>

            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>

            <nav className={`${styles.nav} ${isActive ? `${styles.active}` : ''}`}>
                <ul>
                    <li>
                        <Link to="/formacion">Formación</Link>
                    </li>

                    <li>
                        <Link to="/habilidades">Habilidades</Link>
                    </li>

                    <li>
                        <Link to="/proyectos">Proyectos</Link>
                    </li>

                    <li>
                        <Link className={styles.contacto} to="/contacto">Contacto</Link>
                    </li>

                    <li>
                        <img src={!modoOscuro ? '/lightmode.svg' : '/darkmode.svg'} alt="Icono selector tema" onClick={() => {
                            setModoOscuro(!modoOscuro)
                            cambiarTema();
                        }} 
                        width={45}
                        height={45}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
}