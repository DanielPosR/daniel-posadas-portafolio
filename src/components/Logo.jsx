import styles from '/styles/header.module.css';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <h2 className={styles.heading}>DanielPosR</h2>
        </Link>

    )
}

export default Logo