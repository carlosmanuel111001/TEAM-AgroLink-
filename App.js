import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      // Tu código de aplicación aquí
      <></> // Elemento fragment vacío
    );
  }
}

export default App;
