import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EditarProducto = () => {
  const navigation = useNavigation();
  const handleActualizar = () => {
    Alert.alert('Información', 'Producto actualizado', [
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  const handleSalir = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Tipo de producto:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>ID:</Text>
      <TextInput style={styles.input} editable={false} />

      <View style={styles.imagePlaceholder}>
        <Text>Imagen aquí</Text>
      </View>

      <Text style={styles.label}>Nombre del producto:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Precio:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Cantidad:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Fecha:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Descuento:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Ubicación:</Text>
      <TextInput style={styles.input} />

      {/* Puedes agregar aquí más campos si es necesario */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.actualizarButton}
          onPress={handleActualizar}>
          <Text style={styles.actualizarText}>Actualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.salirButton} onPress={handleSalir}>
          <Text style={styles.salirText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: '#e0e0e0', // Color de fondo para representar el marcador de posición
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 30, 
  },
  actualizarButton: {
    flex: 1,
    backgroundColor: '#4CAF50', // verde para el botón de actualizar
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  actualizarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  salirButton: {
    flex: 1,
    backgroundColor: '#FF5252', // rojo para el botón de salir
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  salirText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditarProducto;
