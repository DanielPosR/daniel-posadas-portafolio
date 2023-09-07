//* COMPONENTES
import Footer from './components/Footer'
import Header from './components/Header'
import Habilidades from './Pages/Habilidades'


//* DEPENDENCIAS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* ESTILOS
import './index.css';
import Formacion from './Pages/Formacion';
import Proyectos from './Pages/Proyectos';
import SobreMi from './Pages/SobreMi';
import Contacto from './Pages/Contacto';
import Error from './Pages/Error';


function App() {

  return (

    <Router>

      <Header />

      <Routes>

        <Route
          path='/'
          element={<SobreMi />}
        />

        <Route
          path='/formacion'
          element={<Formacion />}
        />

        <Route
          path='/habilidades'
          element={<Habilidades />}
        />

        <Route
          path='/proyectos'
          element={<Proyectos />}
        />

        <Route
          path='/contacto'
          element={<Contacto />}
        />

        <Route path='*' element={<Error/> } />

      </Routes>

      <Footer />
    </Router>

  )
}

export default App;
