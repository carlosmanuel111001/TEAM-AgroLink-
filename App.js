import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import VistaPrincipal from './src/Views/vistaPrincipal';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <VistaPrincipal /> // Usar el componente VistaPrincipal aquí
    );
  }
}

export default App;
