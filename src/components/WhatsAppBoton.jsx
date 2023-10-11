

export const generarEnlaceWhatsApp = (numero, mensaje) => {
    
    const numeroLimpio = numero.replace(/\D/g, '');
    const mensajeCodificado = encodeURIComponent(mensaje);
    return `https://api.whatsapp.com/send?phone=${numeroLimpio}&text=${mensajeCodificado}`;
}