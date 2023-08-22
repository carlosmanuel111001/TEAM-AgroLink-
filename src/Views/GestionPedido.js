import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Modal,
  Button,
} from 'react-native';


const GestionPedido = ({navigation}) => {
  const handleGestionPedidoPress = () => {
    navigation.navigate('GestionPedido'); // Navega a la pantalla de Gestionar Pedido
  };
  const handleBackPress = () => {
    console.log('Back pressed!');
    navigation.goBack();
  };
  // Datos de ejemplo. Estos probablemente vendrán de la base de datos.
  const DATA = [
    {venta: 'Venta1', cliente: 'Cliente1', fecha: '01/01/2023', total: '$100'},
    {venta: 'Venta2', cliente: 'Cliente2', fecha: '02/01/2023', total: '$200'},
    // ... más datos
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setCurrentData(item);
        setModalVisible(true);
      }}>
      <View style={styles.row}>
        <Text style={styles.cell}>{item.venta}</Text>
        <Text style={styles.cell}>{item.cliente}</Text>
        <Text style={styles.cell}>{item.fecha}</Text>
        <Text style={styles.cell}>{item.total}</Text>
      </View>
    </TouchableOpacity>
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
        <Text style={styles.headerText}>Registro de pedidos</Text>
      </View>
      <View style={styles.division} />
      <View style={styles.container}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <Text>{currentData?.venta}</Text>
            <Text>{currentData?.cliente}</Text>
            <Text>{currentData?.fecha}</Text>
            <Text>{currentData?.total}</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
        <HeaderRow />
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.venta} />
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
  // del modal 
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
},
});
export default GestionPedido;
