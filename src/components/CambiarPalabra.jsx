import React, { useState, useEffect } from 'react';

export const CambiarPalabra = () => {
  const palabras = ['cimentación', 'estructura', 'albañilería', 'obra gris'];
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [contenidoH1, setContenidoH1] = useState('Diseñamos tu espacio para ');
  const [contenidoH2, setContenidoH2] = useState('');
  const [mostrarCursor, setMostrarCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMostrarCursor(false); // Oculta el cursor antes de cambiar la palabra
      setTimeout(() => {
        setIndicePalabra((indiceAnterior) => (indiceAnterior + 1) % palabras.length);
        setMostrarCursor(true); // Muestra el cursor después de cambiar la palabra
      }, 500); // Retrasa el cambio de palabra
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [indicePalabra]);

  useEffect(() => {
    // Configura una breve demora antes de cambiar el contenidoH1
    const timeoutId = setTimeout(() => {
      const palabraActual = palabras[indicePalabra];
  
      // Si la palabra actual es "obra gris", agrégala a contenidoH1 como una sola palabra
       // De lo contrario, agrégala a contenidoH1 y reemplaza contenidoH2
       setContenidoH1('Diseñamos tu espacio para ' + palabraActual);
       setContenidoH2(palabraActual); // en caso de que querer separ palabras
    }, 200); // Ajusta este valor según tus preferencias
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, [indicePalabra]);
  

  return (
    <>
      <h1 className='space-1 titulo blanco'>
        {contenidoH1}
        {mostrarCursor && <span className='cursor'>|</span>}
      </h1>
     
    </>
  )
}
