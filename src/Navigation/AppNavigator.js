import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VistaPrincipal from '../ViewsAgricultor/vistaPrincipal';
import VistaOpcionesAgricultor from '../ViewsAgricultor/VistaOpcionesAgricultor';
import PerfilAgricultor from '../ViewsAgricultor/PerfilAgricultor';
import GestionPedido from '../ViewsAgricultor/GestionPedido';
import GestionPago from '../ViewsAgricultor/GestionPago';
import DetallesPago from '../ViewsAgricultor/DetallesPago';
import DetallePedido from '../ViewsAgricultor/DetallePedido';
import CalificacionComentario from '../ViewsAgricultor/CalificacionComentario';
import HistorialVentas from '../ViewsAgricultor/HistorialVentas';
import EditarProducto from '../ViewsAgricultor/EditarProducto';
import RegistroProducto from '../ViewsAgricultor/RegistroProducto';
import Mensaje from '../ViewsAgricultor/Mensaje';
import DetalleMensaje from '../ViewsAgricultor/DetalleMensaje';
import PantallaRol from '../ViewsCompartidas/PantallaRol';
import InicioSesion from '../ViewsCompartidas/InicioSesion';
import ConsumidorNavigator from '../Navigation/ConsumidorNavigator';
import DatosRegistro from '../ViewsCompartidas/DatosRegistro';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Rol">
        <Stack.Screen
          name="PantallaRol"
          component={PantallaRol}
          options={{headerShown: false}} // Esto oculta el encabezado
        />
        <Stack.Screen
          name="InicioSesion"
          component={InicioSesion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Principal"
          component={VistaPrincipal}
          options={{headerShown: false}} // Esto oculta el encabezado
        />
        <Stack.Screen
          name="Opciones"
          component={VistaOpcionesAgricultor}
          options={{headerShown: false}} // Esto oculta el encabezado
        />
        <Stack.Screen
          name="PerfilAgricultor"
          component={PerfilAgricultor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GestionPedido"
          component={GestionPedido}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GestionPago"
          component={GestionPago}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetallesPago"
          component={DetallesPago}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetallePedido"
          component={DetallePedido}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalificacionComentario"
          component={CalificacionComentario}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistorialVentas"
          component={HistorialVentas}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditarProducto"
          component={EditarProducto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistroProducto"
          component={RegistroProducto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mensaje"
          component={Mensaje}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetalleMensaje"
          component={DetalleMensaje}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConsumidorNavigator" // Asigna un nombre a este Navigator anidado
          component={ConsumidorNavigator} // Define el componente
          options={{headerShown: false}} // Oculta el encabezado
        />
          <Stack.Screen
          name="DatosRegistro" // Asigna un nombre a este Navigator anidado
          component={DatosRegistro} // Define el componente
          options={{headerShown: false}} // Oculta el encabezado
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
