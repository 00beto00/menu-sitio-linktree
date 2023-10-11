import React, { useState } from 'react';

export const Enlaces = () => {
    const [copiedText, setCopiedText] = useState('');
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);

    // Función para compartir el enlace de WhatsApp
    const compartirEnlaceWhatsApp = () => {
        const url = window.location.href;
        window.open(`https://api.whatsapp.com/send?text=¡Echa un vistazo a este enlace!%0A${url}`, "_blank");
    }

    // Función para copiar el enlace al portapapeles
    const compartirEnlace = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopiedText(url);
                setShowCopiedMessage(true); // Mostrar el mensaje de confirmación
                // Puedes ajustar el tiempo para ocultar el mensaje si lo deseas
                setTimeout(() => {
                    setShowCopiedMessage(false);
                }, 3000); // Ocultar el mensaje después de 3 segundos
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles: ', error)
                // Maneja el error aquí si es necesario
            })
    }



    return (


            <div className="modal fade" id="menu" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Compartir</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className='full-size compartirBoton'  type="button" onClick={compartirEnlaceWhatsApp}>
                                <svg viewBox="0 0 24 24" data-testid="ShareIcon-whatsapp" enableBackground="new 0 0 24 24" className="icon-svg"><g clipPath="url(#clip0_657_572)"><rect y="0.0012207" width="24" height="24.0004" rx="4" fill="#00E676"></rect><path fillRule="evenodd" clipRule="evenodd" d="M16.201 7.74608C15.0805 6.61991 13.5866 6.00122 11.9957 6.00122C8.71989 6.00122 6.05132 8.66984 6.04847 11.9457C6.04847 12.9949 6.32217 14.0156 6.84105 14.9194L6 18.0014L9.15324 17.1746C10.0228 17.6479 11.0007 17.8988 11.9957 17.8988H11.9986C15.2744 17.8988 17.943 15.2302 17.9458 11.9514C17.943 10.3634 17.3243 8.86941 16.201 7.74608ZM11.9957 16.8924C11.1062 16.8924 10.2366 16.6529 9.47826 16.2024L9.29865 16.0941L7.42837 16.5844L7.9273 14.7598L7.81041 14.5716C7.31433 13.7847 7.05488 12.8752 7.05488 11.9429C7.05488 9.22295 9.27299 7.0048 11.9986 7.0048C13.3186 7.0048 14.5588 7.52085 15.4939 8.45315C16.4262 9.38831 16.9394 10.6285 16.9394 11.9486C16.9366 14.6771 14.7185 16.8924 11.9957 16.8924ZM14.7071 13.1917C14.5588 13.1175 13.8289 12.7583 13.6921 12.707C13.5552 12.6585 13.4555 12.6328 13.3585 12.7811C13.2587 12.9294 12.9736 13.2658 12.8881 13.3627C12.8026 13.4625 12.7142 13.4739 12.5659 13.3998C12.4177 13.3257 11.9387 13.1688 11.3713 12.6614C10.9294 12.2679 10.6329 11.7804 10.5445 11.6321C10.459 11.4839 10.536 11.404 10.6101 11.3299C10.6757 11.2643 10.7584 11.156 10.8325 11.0704C10.9066 10.9849 10.9323 10.9222 10.9808 10.8224C11.0292 10.7226 11.0064 10.6371 10.9694 10.563C10.9323 10.4888 10.6358 9.7561 10.5103 9.45959C10.3906 9.16878 10.268 9.20869 10.1768 9.20584C10.0912 9.20014 9.99145 9.20014 9.89166 9.20014C9.79187 9.20014 9.63222 9.2372 9.49537 9.38546C9.35852 9.53371 8.97648 9.89295 8.97648 10.6257C8.97648 11.3584 9.50962 12.0626 9.58375 12.1624C9.65788 12.2622 10.6301 13.7619 12.1212 14.4062C12.4747 14.5602 12.7512 14.6514 12.9679 14.7198C13.3243 14.8339 13.6465 14.8168 13.9031 14.7797C14.1882 14.7369 14.7812 14.4205 14.9066 14.0726C15.0292 13.7248 15.0292 13.4283 14.9922 13.3656C14.9551 13.3028 14.8553 13.2658 14.7071 13.1917Z" fill="white"></path></g><defs><clipPath id="clip0_657_572"><path d="M0 4.00122C0 1.79208 1.79086 0.0012207 4 0.0012207H20C22.2091 0.0012207 24 1.79208 24 4.00122V20.0016C24 22.2108 22.2091 24.0016 20 24.0016H4C1.79086 24.0016 0 22.2108 0 20.0016V4.00122Z" fill="white"></path></clipPath></defs></svg>
                                <span className='span-share'>Compartir por WhatsApp</span>
                            </button>
                           
                            <button className='full-size compartirEnlace'  type="button" onClick={compartirEnlace}>
                            <svg viewBox="0 0 48 48"  enableBackground="new 0 0 24 24" className="icon-svg"><rect y="0.000488281" width="48" height="48" rx="8" fill="#F3F3F1"></rect><path fillRule="evenodd" clipRule="evenodd" d="M28.1678 16.8744L28.5415 17.2065L29.2059 16.4591L28.8322 16.127L24.3322 12.127H23.6678L19.1678 16.127L18.7941 16.4591L19.4585 17.2065L19.8322 16.8744L23.4998 13.6143V26.5012V27.0012H24.4998V26.5012V13.6139L28.1678 16.8744ZM15 20.0007H15.5H20.5001H21.0001V21.0007H20.5001H16V34.0012H32.0003V21.0007H27.5002H27.0002V20.0007H27.5002H32.5003H33.0003V20.5007V34.5012V35.0012H32.5003H15.5H15V34.5012V20.5007V20.0007Z" fill="black"></path></svg>
                                <span className='span-share' id='mensajeCopiado'>Copiar enlace</span>

                            </button>
                            {showCopiedMessage && (
                            <div className="alert alert-success" role="alert">
                                URL copiado: {copiedText}
                            </div>
                        )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>


    )

}