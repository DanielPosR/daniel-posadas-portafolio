import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer>

      <div className="contenedor">
        <img src="/img/logo.png" alt="Logotipo" className="logo-footer" />

        <p className="parrafo-footer">
          Todos los derechos reservados. Daniel Posadas Rangel &copy; {new Date().getFullYear()}
        </p>

      </div>

    </footer>
  )
}
