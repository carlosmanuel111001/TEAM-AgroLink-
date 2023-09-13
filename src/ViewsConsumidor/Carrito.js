import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

const CarritoDeCompras = ({navigation}) => {
  const agricultores = [
    {id: '1', nombre: 'Juan Pérez', totalProductos: 5, costoTotal: 100},
    // ... otros agricultores
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      <View style={styles.encabezado}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.botonRegresoContainer}>
          <Image
            source={require('../assets/regreso.png')}
            style={styles.botonRegreso}
          />
        </TouchableOpacity>
        <Text style={styles.tituloEncabezado}>Carrito de Compras</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.listaContenido}
        data={agricultores}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemAgricultor}
            onPress={() =>
              navigation.navigate('DetalleCarrito', {agricultorId: item.id})
            }>
            <Text style={styles.nombreAgricultor}>{item.nombre}</Text>
            <Text style={styles.detallesAgricultor}>
              {item.totalProductos} productos - ${item.costoTotal}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4CAF50',
    height: 60,
    paddingHorizontal: 15,
    elevation: 3,
  },
  botonRegresoContainer: {
    padding: 5,
  },
  botonRegreso: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  tituloEncabezado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    marginRight: 40, // compensar el espacio del botón
  },
  listaContenido: {
    paddingVertical: 10,
  },
  itemAgricultor: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  nombreAgricultor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  detallesAgricultor: {
    marginTop: 5,
    fontSize: 14,
    color: '#757575',
  },
});

export default CarritoDeCompras;
