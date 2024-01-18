
import '../../styles/header.css'
import MenuResponsive from './MenuResponsive'

export default function Header() {

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <header className='header'>

                <div className="barra contenedor">


                    <a
                    onClick={scrollTop} 
                    className="logo"
                    >
                        <img src="/img/logo.png" alt="logotipo" />
                        <p>DanielPosR</p>
                    </a>

                    <MenuResponsive />


                </div>

            </header>
        </>
    )
}
