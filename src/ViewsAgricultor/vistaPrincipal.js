import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  Text,
  FlatList,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const VistaPrincipal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pedidoSearch, setPedidoSearch] = useState('');

  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.navigate('Opciones');
  };
  const handleMessagesPress = () => {
    navigation.navigate('Mensaje');
  };
  const handleViewPress = () => {
    setModalVisible(true);
  };

  const handleRegister = () => {
    navigation.navigate('RegistroProducto');
  };
  const productos = [
    {id: '1', nombre: 'Producto 1'},
    {id: '2', nombre: 'Producto 2'},
    // ... otros productos
  ];
  const handleEditPress = productoId => {
    navigation.navigate('EditarProducto', {id: productoId});
    // Puedes enviar el id del producto como un parámetro si lo necesitas en la siguiente pantalla.
  };
  const handleLogOut = () => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que quieres salir?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancelado'),
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            console.log('Salir');
            // Navega de regreso a la pantalla de inicio de sesión
            navigation.reset({
              index: 0,
              routes: [{name: 'PantallaRol'}], // Asegúrate de usar el nombre correcto de tu pantalla de inicio
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Buscar Pedido:</Text>
            <TextInput
              style={styles.input}
              value={pedidoSearch}
              onChangeText={text => setPedidoSearch(text)}
              placeholder="Número de pedido o dato"
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => {
                // Aquí agregarás la lógica de búsqueda
                console.log('Buscando pedido:', pedidoSearch);
                setModalVisible(false);
              }}>
              <Text style={{color: 'white'}}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <Text style={{color: 'white'}}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={handleViewPress}>
              <Image
                source={require('../assets/visualizar.png')}
                style={styles.viewImage}
              />
            </TouchableOpacity>
            <View style={styles.rightButtons}>
              <TouchableOpacity
                style={styles.messagesButton}
                onPress={handleMessagesPress}>
                <Image
                  source={require('../assets/mensaje.png')}
                  style={styles.messagesImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={handleMenuPress}>
                <Image
                  source={require('../assets/menu.png')}
                  style={styles.menuImage}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleRegister}
              style={styles.customButton}>
              <Text style={styles.buttonText}>Registrar Nuevo Producto</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          {/* Parte inferior */}
          {/* Contenido principal */}
          <View style={styles.productListHeader}>
            <Text style={styles.productListHeaderText}>Lista de Productos</Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={productos}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.productRow}>
                  <Text style={styles.productId}>{item.id}</Text>
                  <Text style={styles.productName}>{item.nombre}</Text>
                  <View style={styles.editDeleteButtonContainer}>
                    <TouchableOpacity
                      style={styles.editButton}
                      onPress={() => handleEditPress(item.id)} // Paso el id del producto
                    >
                      <Text style={styles.editButtonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => {}}>
                      <Text style={styles.deleteButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleLogOut} style={styles.logOutButton}>
            <Text style={styles.logOutText}>Salir</Text>
          </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.5,
    backgroundColor: '#5DDCAE',
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  viewButton: {},
  viewImage: {
    width: 30,
    height: 30,
  },
  rightButtons: {
    flexDirection: 'row',
  },
  messagesButton: {
    marginRight: 10,
  },
  messagesImage: {
    width: 30,
    height: 30,
  },
  menuButton: {},
  menuImage: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 90,
  },
  customButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Esto hará que las letras sean negras
    fontSize: 18,
    fontWeight: 'bold',
  },
  productListHeader: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white', // Puedes cambiar este color si lo deseas
  },

  productListHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  productId: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },

  productName: {
    flex: 3,
    fontSize: 16,
    color: 'black',
  },

  editButton: {
    backgroundColor: 'black', // Cambia el color a negro
    paddingVertical: 4, // ajusta la altura
    paddingHorizontal: 10, // ajusta la anchura
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },

  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: 'black', // Cambia el color a negro
    paddingVertical: 4, // ajusta la altura
    paddingHorizontal: 10, // ajusta la anchura
    borderRadius: 8,
    alignItems: 'center',
  },

  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editDeleteButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
    marginTop: 5, // Ajusta este valor para separar los botones del texto central
  },
  listContainer: {
    marginTop: 80, // Puedes ajustar este valor según tus necesidades
  },
  // Estilos para el modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fondo semi-transparente
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderColor: '#e0e0e0',
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#5DDCAE',
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F76D57',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logOutButton: {
    marginTop: 20,
    marginBottom: 10, // Espacio en la parte inferior
    alignSelf: 'center',
  },
  logOutText: {
    fontSize: 16,
    color: '#7B8D93', // Un color tenue para que el botón sea discreto
    textDecorationLine: 'underline',
  },
});

export default VistaPrincipal;
