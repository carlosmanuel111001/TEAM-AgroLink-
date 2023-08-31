import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const VistaPrincipalConsumidor = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bienvenido, Consumidor</Text>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          /* Ir a una categoría o pantalla específica */
        }}>
        <Text style={styles.optionText}>Buscar Productos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          /* Ir a una categoría o pantalla específica */
        }}>
        <Text style={styles.optionText}>Mis Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          /* Ir a una categoría o pantalla específica */
        }}>
        <Text style={styles.optionText}>Configuración de la Cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          /* Ir a una categoría o pantalla específica */
        }}>
        <Text style={styles.optionText}>Contacto y Ayuda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          /* Salir de la sesión o de la aplicación */
        }}>
        <Text style={styles.optionText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEDED',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default VistaPrincipalConsumidor;
