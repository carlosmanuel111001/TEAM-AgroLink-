import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  Text,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const VistaPrincipal = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.navigate('Opciones');
  };
  const handleMessagesPress = () => {};
  const handleViewPress = () => {};
  const handleRegister = () => {
    console.log('Botón de registro presionado');
  };
  const productos = [
    {id: '1', nombre: 'Producto 1'},
    {id: '2', nombre: 'Producto 2'},
    // ... otros productos
  ];

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.viewButton} onPress={handleViewPress}>
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
                    onPress={() => {
                      /* código para editar */
                    }}>
                    <Text style={styles.editButtonText}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => {
                      /* código para eliminar */
                    }}>
                    <Text style={styles.deleteButtonText}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.4,
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
    color: 'black'
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
});

export default VistaPrincipal;
