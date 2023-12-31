import React, {useState, useEffect} from 'react';
import VistaSplashScreen from './VistaSplashScreen'; // Importa tu pantalla de splash aquí
import VistaPrincipal from './VistaPrincipal';

const VistaSplash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Duración del splash en milisegundos

    return () => clearTimeout(timer); // Limpieza en caso de desmontaje del componente
  }, []);

  return showSplash ? <VistaSplashScreen /> : <VistaPrincipal />;
};

export default VistaSplash;
