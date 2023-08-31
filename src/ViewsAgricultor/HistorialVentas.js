import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
} from 'react-native';

const HistorialVentas = ({navigation}) => {
  const handleVentaDetailPress = () => {
    navigation.navigate('DetalleVenta'); // Navega a la pantalla de Detalle de Venta
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Datos de ejemplo. Estos probablemente vendrán de la base de datos.
  const VENTAS = [
    {venta: 'Venta1', cliente: 'Cliente1', fecha: '01/01/2023', total: '$100'},
    {venta: 'Venta2', cliente: 'Cliente2', fecha: '02/01/2023', total: '$200'},
    // ... más datos
  ];

  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.venta}</Text>
      <Text style={styles.cell}>{item.cliente}</Text>
      <Text style={styles.cell}>{item.fecha}</Text>
      <Text style={styles.cell}>{item.total}</Text>
    </View>
  );

  const HeaderRow = () => {
    return (
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Venta</Text>
        <Text style={styles.headerCell}>Cliente</Text>
        <Text style={styles.headerCell}>Fecha</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={{padding: 10, zIndex: 10, elevation: 10}}>
          <Image
            style={styles.exitIcon}
            source={require('../assets/regreso.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Historial de Ventas</Text>
      </View>
      <View style={styles.division} />
      <View style={styles.container}>
        <HeaderRow />
        <FlatList
          data={VENTAS}
          renderItem={renderItem}
          keyExtractor={item => item.venta}
        />
        <View style={styles.footer}>
          <Button title="Salir" onPress={handleBackPress} color="#FF4C29" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    height: 80,
    backgroundColor: '#5DDCAE',
    flexDirection: 'row',
    alignItems: 'center', // Centra verticalmente
    justifyContent: 'flex-start', // Alinea a la izquierda inicialmente
    paddingBottom: 10,
    paddingHorizontal: 20, // Espacio horizontal para que el ícono y el texto no estén pegados a los bordes
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    position: 'absolute', // Absolutamente posicionado
    left: 0, // Inicia desde la izquierda
    right: 40, // Y termina en la derecha
    textAlign: 'center', // Centra el texto dentro de su contenedor
  },
  content: {
    flex: 5,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  // estilos de la tabla de la pagina principal

  headerRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  cell: {
    flex: 1,
    padding: 8,
    color: 'black',
  },
  listContainer: {
    flex: 1,
    marginBottom: 50, // da espacio para el botón
  },
  footer: {
    padding: 10,
  },
});

export default HistorialVentas;
