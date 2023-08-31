
import { useState } from 'react';
import Slider from '../components/Slider';
import styles from '/styles/proyectos.module.css';
import { v4 as uuid } from 'uuid';
import { tituloDinamico } from '../js/funciones';

const Proyectos = () => {
  tituloDinamico('Proyectos')

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [url, setUrl] = useState('');
  const [etiquetas, setEtiquetas] = useState([]);
  const [textoBtn, setTextoBtn] = useState('Movíl');

  const proyectos = [
    {
      id: uuid(),
      url: 'https://bienes-raices-venta.netlify.app/',
      descripcion: 'Creé una plataforma inmobiliaria desde cero como parte del curso de desarrollo web completo. Esta simulación de sitio web de bienes raíces representa mi habilidad para desarrollar experiencias digitales atractivas y funcionales',
      nombre: 'Bienes Raices',
      imagen: "/img/proyectos/bienes-raices.png",
      etiquetas: ['Html', 'Css', 'Js']
    },
    {
      id: uuid(),
      url: 'https://aluraflix-tan.vercel.app/',
      descripcion: 'Mi proyecto final, desarrollado durante mi formación en Frontend con Oracle y Alura, es un logro personal. Construido desde cero, aplicando mis conocimientos en React JS, incluyendo el uso de useState, useEffect y props. Además, agregué la funcionalidad de localstorage para el seguimiento de videos. Un testimonio de mi compromiso con el aprendizaje y la creación',
      nombre: 'Alura Flix Videos',
      imagen: "/img/proyectos/aluraflix.png",
      etiquetas: ['Html', 'Css', 'Js', 'React JS']
    },
    {
      id: uuid(),
      url: 'https://cafe-blogweb.netlify.app/',
      descripcion: 'Desarrollé un blog de café completo con diversas páginas internas. Este proyecto me brindó una valiosa experiencia en la creación y gestión de contenido web, mejorando mis habilidades en HTML y CSS.',
      nombre: 'Blog Sobre Café',
      imagen: "/img/proyectos/blog-cafe.png",
      etiquetas: ['Html', 'Css']
    },
    {
      id: uuid(),
      url: 'https://encriptador-alura-texto.netlify.app/',
      descripcion: 'Dentro del programa ONE de Oracle y Alura Latam, desarrollé un encriptador que se convirtió en una valiosa herramienta para fortalecer mis habilidades de programación, especialmente en JavaScript. Aunque su función principal es encriptar textos de manera sencilla, este proyecto me brindó la oportunidad de perfeccionar mi lógica de programación y aplicar mis conocimientos de manera efectiva.',
      nombre: 'Encriptador de Texto',
      imagen: "/img/proyectos/encriptador.png",
      etiquetas: ['Html', 'Css', 'Js']
    },
    {
      id: uuid(),
      url: 'https://rocke-and-edm-festival.netlify.app/',
      descripcion: 'Este proyecto representó un desafío, que implicó la integración de un video en el encabezado y la utilización de JavaScript para crear una experiencia de navegación fluida. La implementación exitosa de estas características no solo mejoró la estética de la página, sino que también enriqueció la interacción del usuario al dirigirlo de manera suave a través de las diversas secciones del sitio.',
      nombre: 'Festival Rock & EDM',
      imagen: "/img/proyectos/festival-rock.png",
      etiquetas: ['Html', 'Css', 'Js', 'Gulp', 'Sass']
    },
    {
      id: uuid(),
      url: 'https://org-beta-gold.vercel.app/',
      descripcion: 'Desarrollé un proyecto con React que facilita la organización de equipos de trabajo. Esta aplicación permite crear, editar y eliminar registros de manera intuitiva, y todos los datos se almacenan en el almacenamiento local para un acceso rápido y eficiente.',
      nombre: 'Organizador de Equipos',
      imagen: "/img/proyectos/organizador.png",
      etiquetas: ['Html', 'Css', 'Js', 'React JS']
    },
    {
      id: uuid(),
      url: 'https://remarkable-lollipop-1fee64.netlify.app/',
      descripcion: 'Desarrollé un controlador de gastos en React que facilita el seguimiento del presupuesto. Con esta aplicación, puedes calcular el saldo restante a partir de una cantidad inicial, además de filtrar, editar y eliminar los gastos de manera sencilla. ¡Mantén un control sobre tus finanzas!',
      nombre: 'Control de Gastos',
      imagen: "/img/proyectos/presupuesto.png",
      etiquetas: ['Html', 'Css', 'Js', 'React JS', 'Tailwind']
    },
    {
      id: uuid(),
      url: 'https://proyecto-techpro.netlify.app/',
      descripcion: 'Atractiva landing page dedicada a unos audífonos. Esta página ofrece diversas secciones para explorar a fondo las características y ventajas de este producto. Desde calidad de sonido hasta comodidad de uso, el sitio proporciona toda la información esencial que el usuario necesita conocer.',
      nombre: 'Audifonos TechPRO',
      imagen: "/img/proyectos/techpro.png",
      etiquetas: ['Html', 'Css']
    },
    {
      id: uuid(),
      url: 'https://registro-vet.netlify.app/',
      descripcion: 'Esta es una página web que simplifica la gestión de citas de pacientes en una clínica veterinaria. Con esta plataforma, los usuarios pueden fácilmente registrar, editar y eliminar citas, agilizando así el proceso de programación y mejorando la eficiencia en la atención a las mascotas.',
      nombre: 'Registro de Pacientes',
      imagen: "/img/proyectos/veterinaria.png",
      etiquetas: ['Html', 'Css', 'Js', 'React JS', 'Tailwind']
    },
    {
      id: uuid(),
      url: 'https://danielposr.github.io/AluraShop/index.html',
      descripcion: 'Este proyecto es un ecommerce ficticio centrado en la gestión de productos geek. Ofrece un sistema de administración que permite explorar una variedad de productos desde un archivo JSON estático. Los usuarios pueden crear cuentas, iniciar sesión y disfrutar de formularios con validación, además de agregar nuevos productos al catálogo.',
      nombre: 'Tienda AluraGeek',
      imagen: "/img/proyectos/presupuesto.png",
      etiquetas: ['Html', 'Css', 'Js', 'JSON', 'FetchAPI']
    },
  ]


  function scrollNav(e) {
    e.preventDefault();

    const seccionScroll = e.target.attributes.href.value;
    const seccion = document.querySelector(seccionScroll);

    seccion.scrollIntoView({ behavior: "smooth" });
  }



  function mostrarVista(e, id) {

    const seleccionado = proyectos.filter(proyecto => proyecto.id === id);

    scrollNav(e);

    return (
      setNombre(seleccionado[0].nombre),
      setDescripcion(seleccionado[0].descripcion),
      setUrl(seleccionado[0].url),
      setEtiquetas(seleccionado[0].etiquetas)
    );
  }



  function vistaMovil() {
    const frame = document.querySelector('.iframe');

    frame.classList.toggle('iframe-movil');

    if (frame.classList.contains('iframe-movil')) {
      return setTextoBtn('Escritorio')
    } else {
      return setTextoBtn('Movíl')
    }
  }


  return (
    <>
      <main className="contenedor contenido-centrado">
        <h1 className='heading'>Mis Proyectos</h1>

        <div className={styles.proyectos}>

          <Slider
            proyectos={proyectos}
            mostrarVista={mostrarVista}
          />

        </div>


        <div id='vista-previa' className={styles.infoProyecto}>

          <h2 className='heading'>Vista Previa del Proyecto</h2>



          <div className={styles.descripcion}>
            {!nombre ? <h3 className='heading'>Presiona sobre algún proyecto para abrir la vista previa</h3> : <h3 className='heading'><span>Proyecto: </span>{nombre}</h3>}

            <p>{descripcion}</p>

            <div className={styles.etiquetas}>
              {etiquetas.map(etiqueta => {

                let colorDinamico;


                switch (etiqueta) {
                  case 'Html':
                    colorDinamico = 'rgba(241, 101, 41, .89)';
                    break;
                  case 'Css':
                    colorDinamico = 'rgba(21, 114, 182,.89)';
                    break;

                  case 'Js':
                    colorDinamico = 'rgba(239, 216, 29, .89)';
                    break;

                  case 'React JS':
                    colorDinamico = 'rgba(96, 216, 249, .89)';
                    break;

                  case 'Gulp':
                    colorDinamico = 'rgba(235, 74, 75, .89)';
                    break;

                  case 'Sass':
                    colorDinamico = 'rgba(203, 102, 153, .89)';
                    break;


                  default:
                    colorDinamico = '#000';
                    break;
                }

                const dynamicStyle = {
                  backgroundColor: `${colorDinamico}`
                }

                return (
                  <div key={etiqueta} className={styles.tag} style={dynamicStyle}>{etiqueta}</div>
                )
              })}
            </div>
          </div>

          {url && <a href={url} target='_blank'><iframe className='iframe' src={url} height={'500'}></iframe></a>}

          <div className={styles.botones}>
            {url &&
              <>
                <button
                  id='btn-vista'
                  className='btn'
                  onClick={() => vistaMovil()}
                >
                  {textoBtn}
                </button>

                <a className='btn' href={url} target='_blank'>Ir al sitio</a>
              </>
            }
          </div>

        </div>
      </main>
    </>
  )
}

export default Proyectos