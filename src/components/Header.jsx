import Logo from './Logo';
import MenuHamburguesa from './MenuHamburguesa';
import styles from '/styles/header.module.css';


const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={`contenedor ${styles.barra}`}>

                    <Logo />
                    <MenuHamburguesa />
                    
                </div>
            </header>
        </>
    )
}

export default Header;