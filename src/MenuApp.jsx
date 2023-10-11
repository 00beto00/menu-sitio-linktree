import miImagen from './assets/imagenes/logo@2x.png' // Ajusta la ruta según la estructura de tu proyecto
import "./styles/MenuApp.css"
import "./components/Enlaces"
import { Enlaces } from './components/Enlaces'
import { CambiarPalabra } from './components/CambiarPalabra'
import { AgregarLinks } from './components/AgregarLinks'

export const MenuApp = () => {

    return (
        <>

            {/* ICONO DE MENU DE COMPARTIR  */}
            <div className='container-menu'>
                <button type="button" className="custom-menu " data-bs-toggle="modal" data-bs-target="#menu">
                    <span className="material-icons">reorder</span>
                </button>
            </div>

            <div className="container">

                {/* LOGO DE EMPRESA  */}
                <div className="circle">
                    <img className="logo" src={miImagen} alt="" />
                </div>

                {/* AGREGAR TEXTO CON EFECTO TYPE  */}
                <div className="App">
                    <CambiarPalabra />
                </div>

                <div className="d-grid gap-2">
                    {/* AGREGAR LINKS  */}
                    <AgregarLinks />
                </div>

            </div>

            {/* COMPARTIR ENLACE DE SITIO WEB */}
            <Enlaces></Enlaces>
        </>
    )
}
