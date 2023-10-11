import {generarEnlaceWhatsApp} from './WhatsAppBoton'

export const AgregarLinks = () => {

    // Editar boton de WhatsApp
    const numeroWhatsApp = '555555555';
    const mensajeWhatsApp = 'Hola [Empresa], estoy interesado en contratar sus servicios';
    const enlaceWhatsApp = generarEnlaceWhatsApp(numeroWhatsApp, mensajeWhatsApp);

    // Define un arreglo de objetos para almacenar la información de los enlaces
    const enlaces = [
        {
            nombre: "Sitio web",
            link: "https://empresa.com.mx/",
        },
        {
            nombre: "Construcción",
            link: "https://empresa.com.mx/proceso",
        },
    ]

    return (
        <>
            {/* IMPRIMIR BOTONES */}
            {enlaces.map((enlace, index) => (
                <a
                    key={index}
                    className="custom-button"
                    target="_blank"
                    href={enlace.link}
                >
                    {enlace.nombre}
                </a>
            ))}

             {/* AGREGAR BOTON DE WHATSAPP */}
             <a className="custom-button" target="_blank" href={enlaceWhatsApp}>WhatsApp</a>
        </>
    )
}
