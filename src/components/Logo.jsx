import styles from '/styles/header.module.css';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <h2 className={styles.heading}>DanDev</h2>
        </Link>

    )
}

export default Logo