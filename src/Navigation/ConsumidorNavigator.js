import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaRol from '../ViewsCompartidas/PantallaRol';
import InicioSesion from '../ViewsCompartidas/InicioSesion';
import VistaPrincipalConsumidor from '../ViewsConsumidor/VistaPrincipalConsumidor';
import OpcionesConsumidor from '../ViewsConsumidor/OpcionesConsumidor';
import DescripcionProducto from '../ViewsConsumidor/DescripcionProducto'; 
import MensajeConsumidor from '../ViewsConsumidor/MensajeConsumidor';
import Pagar from '../ViewsConsumidor/Pagar';
import PerfilConsumidor from '../ViewsConsumidor/PerfilConsumidor';
import GestionPagoConsumidor from '../ViewsConsumidor/GestionPagoConsumidor';
import DetallesPagoConsumidor from '../ViewsConsumidor/DetallesPagoConsumidor';
import ProductosDelAgricultor from '../ViewsConsumidor/ProductosDelAgricultor';
import Carrito from '../ViewsConsumidor/Carrito';
import DetalleCarrito from '../ViewsConsumidor/DetalleCarrito';
import RealizarPago from '../ViewsConsumidor/RealizarPago';
import CalificacionConsumidor from '../ViewsConsumidor/CalificacionConsumidor';
import HistorialCompras from '../ViewsConsumidor/HistorialCompras'
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
        <ConsumidorStack.Screen
        name="GestionPagoConsumidor"
        component={GestionPagoConsumidor}
        options={{headerShown: false}}
      />
      <ConsumidorStack.Screen
        name="DetallesPagoConsumidor"
        component={DetallesPagoConsumidor}
        options={{headerShown: false}}
      />
      <ConsumidorStack.Screen
        name="ProductosDelAgricultor"
        component={ProductosDelAgricultor}
        options={{headerShown: false}}
      />
      <ConsumidorStack.Screen
        name="Carrito"
        component={Carrito}
        options={{headerShown: false}}
      />
      <ConsumidorStack.Screen
        name="DetalleCarrito"
        component={DetalleCarrito}
        options={{headerShown: false}}
      />
        <ConsumidorStack.Screen
        name="RealizarPago"
        component={RealizarPago}
        options={{headerShown: false}}
      />
        <ConsumidorStack.Screen
        name="CalificacionConsumidor"
        component={CalificacionConsumidor}
        options={{headerShown: false}}
      />
      <ConsumidorStack.Screen
        name="HistorialCompras"
        component={HistorialCompras}
        options={{headerShown: false}}
      />
      {/* Añade las otras pantallas de consumidor que necesites aquí */}
    </ConsumidorStack.Navigator>
  );
};

export default ConsumidorNavigator;
