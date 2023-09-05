import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaRol from '../ViewsCompartidas/PantallaRol';
import InicioSesion from '../ViewsCompartidas/InicioSesion';
import VistaPrincipalConsumidor from '../ViewsConsumidor/VistaPrincipalConsumidor';
import OpcionesConsumidor from '../ViewsConsumidor/OpcionesConsumidor';
import DescripcionProducto from '../ViewsConsumidor/DescripcionProducto'; 
import MensajeConsumidor from '../ViewsConsumidor/MensajeConsumidor';
import Pagar from '../ViewsConsumidor/Pagar';
import PerfilConsumidor from '../ViewsConsumidor/PerfilConsumidor'

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
      <ConsumidorStack.Screen
        name="OpcionesConsumidor"
        component={OpcionesConsumidor}
        options={{headerShown: false}}
      />
      <ConsumidorStack.Screen
        name="DescripcionProducto"
        component={DescripcionProducto}
        options={{headerShown: false}}
      />
       <ConsumidorStack.Screen
        name="MensajeConsumidor"
        component={MensajeConsumidor}
        options={{headerShown: false}}
      />
       <ConsumidorStack.Screen
        name="Pagar"
        component={Pagar}
        options={{headerShown: false}}
      />
       <ConsumidorStack.Screen
        name="PerfilConsumidor"
        component={PerfilConsumidor}
        options={{headerShown: false}}
      />
      {/* Añade las otras pantallas de consumidor que necesites aquí */}
    </ConsumidorStack.Navigator>
  );
};

export default ConsumidorNavigator;
