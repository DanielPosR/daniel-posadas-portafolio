import React from 'react'
import styles from '/styles/error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className={`contenedor ${styles.bg}`}>

        <div className={styles.contenidobg}>
          <h1>404 - Página no encontrada</h1>

          <Link className='btn' to={'/'}>Volver al Inicio</Link>
        </div>
    </div>
  )
}

export default Error