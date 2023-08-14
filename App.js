import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/Views/AppNavigator';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <AppNavigator /> // Usar el componente AppNavigator aquí
    );
  }
}

export default App;
