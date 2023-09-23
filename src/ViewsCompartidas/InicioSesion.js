import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  goToRegistro,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InicioSesion = ({route}) => {
  const userRole = route?.params?.userRole || 'defaultRole'; // Puedes cambiar 'defaultRole' si lo requieres
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (userRole === 'agricultor') {
      navigation.navigate('Principal');
    } else if (userRole === 'consumidor') {
      navigation.navigate('ConsumidorNavigator', {
        screen: 'VistaPrincipalConsumidor',
      });
    } else {
      console.warn('El valor de userRole no es válido: ', userRole);
    }
  };
  const goToRegistro = () => {
    navigation.navigate('DatosRegistro');
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.loginContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Image
                source={require('../assets/regreso.png')}
                style={styles.backImage}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Inicio de Sesión</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Contraseña"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.showPasswordText}>
                {showPassword ? 'Ocultar' : 'Ver'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>

          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Olvidó su contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToRegistro}>
              <Text style={styles.footerLink}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#EAEDED',
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Este es el color de fondo. Cambia a tu gusto.
  },
  logo: {
    width: 150, // Ajusta según el tamaño de tu logo
    height: 150, // Ajusta según el tamaño de tu logo
    resizeMode: 'contain', // Asegura que el logo se ajuste sin distorsión
  },
  loginContainer: {
    flex: 2,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    marginLeft: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C3E50',
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backImage: {
    width: 25,
    height: 25,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#7F8C8D',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#7F8C8D',
  },
  inputPassword: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  showPasswordText: {
    color: '#4CAF50',
    marginLeft: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2, // Para Android: Da un ligero efecto de sombra
    shadowOffset: {width: 0, height: 2}, // Para iOS: Efecto de sombra
    shadowOpacity: 0.2, // Transparencia de la sombra
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLink: {
    color: '#4CAF50',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});

export default InicioSesion;
