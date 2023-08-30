import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VistaPrincipal from './vistaPrincipal';
import VistaOpcionesAgricultor from './VistaOpcionesAgricultor';
import PerfilAgricultor from './PerfilAgricultor';
import GestionPedido from './GestionPedido';
import GestionPago from './GestionPago';
import DetallesPago from './DetallesPago';
import DetallePedido from './DetallePedido';
import CalificacionComentario from './CalificacionComentario';
import HistorialVentas from './HistorialVentas';
import EditarProducto from './EditarProducto';
import RegistroProducto from './RegistroProducto';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
