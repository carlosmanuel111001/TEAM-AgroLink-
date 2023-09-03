import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Pagar = ({route}) => {
  const {productName, productPrice} = route.params;
  const agricultor = 'Juan Pérez';
  const cuentaAgricultor = '1234 5678 9012 3456';
  const [isSelected, setSelection] = React.useState(false);

  const navigation = useNavigation();
  const confirmPayment = () => {
    Alert.alert(
      'Confirmar Pago',
      '¿Estás seguro de realizar este pago?',
      [
        {
          text: 'No',
          onPress: () => {}, // No hace nada, solo cierra la alerta
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            // Paso 4: Muestra mensaje y regresa a la pantalla anterior
            Alert.alert(
              'Pago Realizado',
              'Tu pago ha sido procesado exitosamente.',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.goBack(),
                },
              ],
            );
          },
        },
      ],
      {cancelable: false}, // El usuario tiene que seleccionar una opción
    );
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/regreso.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Información de Pago</Text>
      </View>

      {/* Detalles del producto */}
      <View style={styles.productSection}>
        <Text style={styles.productText}>
          Has seleccionado la compra: {productName}
        </Text>
        <Text style={styles.productPrice}>
          Por el monto de: ${productPrice}
        </Text>
      </View>

      {/* Detalles de la tarjeta */}
      <View style={styles.cardSection}>
        <TextInput placeholder="Número de tarjeta*" style={styles.input} />
        <View style={styles.dateAndCvv}>
          <TextInput placeholder="MM/YY" style={styles.dateInput} />
          <TextInput placeholder="CVV*" style={styles.cvvInput} />
        </View>
        <TextInput placeholder="Correo electrónico*" style={styles.input} />
      </View>

      {/* Destinatario */}
      <View style={styles.recipientSection}>
        <Text style={styles.recipientText}>Estás pagando a:</Text>
        <Text style={styles.recipientName}>{agricultor}</Text>
        <Text style={styles.recipientAccount}>Cuenta: {cuentaAgricultor}</Text>
      </View>

      {/* Términos y condiciones */}
      <View style={styles.termsContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>*Acepto los términos y condiciones</Text>
      </View>

      {/* Botón */}
      <TouchableOpacity style={styles.payButton} onPress={confirmPayment}>
        <Text style={styles.payButtonText}>Realizar Pago</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f7f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#34495e',
  },
  productSection: {
    backgroundColor: '#e8f1f2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  productText: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 5, // Espaciado para separar del precio
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a085',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5DB075',
    marginBottom: 20, // Espaciado aumentado para separar de la siguiente sección
  },
  cardSection: {
    backgroundColor: '#dfe4ea', // Cambiado a un azul claro
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 45,
    borderColor: '#eaa9a9',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  dateAndCvv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateInput: {
    backgroundColor: 'white',
    borderColor: '#eaa9a9',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  cvvInput: {
    backgroundColor: 'white',
    borderColor: '#eaa9a9',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 0.5,
    fontSize: 16,
  },
  recipientSection: {
    backgroundColor: '#e5e7e9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  recipientText: {
    fontSize: 18,
    color: '#2c3e50',
  },
  recipientName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 5,
  },
  recipientAccount: {
    fontSize: 18,
    color: '#7f8c8d',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#e8f1f2',
    padding: 15, // Aumentado el espaciado interno
    borderRadius: 10, // Bordes más redondeados
  },
  checkbox: {
    marginRight: 7,
  },
  label: {
    fontSize: 16,
    fontWeight: '600', // Aumentando el grosor para mayor legibilidad
    color: '#34495e', // Cambiado a un tono de azul oscuro
    marginLeft: 10, // Espacio entre el checkbox y el texto
  },
  payButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Pagar;
