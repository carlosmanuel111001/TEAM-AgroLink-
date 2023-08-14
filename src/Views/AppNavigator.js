import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VistaPrincipal from './vistaPrincipal';
import VistaOpcionesAgricultor from './VistaOpcionesAgricultor';

const Stack = createStackNavigator();

const AppNavigator = () => {
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
          options={{headerShown: false}}// Esto oculta el encabezado
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
