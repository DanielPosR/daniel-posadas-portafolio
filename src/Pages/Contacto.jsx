import Enlaces from '../components/Enlaces';
import Formulario from '/src/components/Formulario';
import { tituloDinamico } from '../js/funciones';

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}

const Contacto = () => {

  tituloDinamico('Contacto');


  return (
    <main className="contenedor">
      <h1 className='contenido-centrado heading'>Formas de Contacto</h1>

      <div style={styles}>
        <Enlaces />
        <Formulario />
      </div>

    </main>
  )
}

export default Contacto;