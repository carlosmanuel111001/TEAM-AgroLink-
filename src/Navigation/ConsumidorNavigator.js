import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaRol from '../ViewsCompartidas/PantallaRol';
import InicioSesion from '../ViewsCompartidas/InicioSesion';
import VistaPrincipalConsumidor from '../ViewsConsumidor/VistaPrincipalConsumidor';

const ConsumidorStack = createStackNavigator();

const ConsumidorNavigator = () => {
  return (
    <ConsumidorStack.Navigator>
      <ConsumidorStack.Screen
        name="PantallaRol"
        component={PantallaRol}
        options={{headerShown: false}} // Esto oculta el encabezado
      />
      <ConsumidorStack.Screen
        name="InicioSesion"
        component={InicioSesion}
        options={{headerShown: false}}
      />
      <ConsumidorStack.Screen
        name="VistaPrincipalConsumidor"
        component={VistaPrincipalConsumidor}
        options={{headerShown: false}}
      />
      {/* Añade las otras pantallas de consumidor que necesites aquí */}
    </ConsumidorStack.Navigator>
  );
};

export default ConsumidorNavigator;
