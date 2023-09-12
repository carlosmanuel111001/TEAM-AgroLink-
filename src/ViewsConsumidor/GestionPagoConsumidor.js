import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import searchIcon from '../assets/visualizar.png';

const PagoConsumidorScreen = ({navigation}) => {
  const data = [
    {
      id: '1',
      name: 'Juan Pérez',
      image: require('../assets/personal.png'),
      message: 'Realizó un consumo',
    },
    // ... puedes agregar más datos aquí
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.chatItemContainer}
      onPress={() => navigation.navigate('DetallesPagoConsumidor', {name: item.name})}>
      <Image source={item.image} style={styles.userImage} />
      <View style={styles.chatInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userMessage}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/regreso.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Consumos</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput placeholder="Buscar consumo..." style={styles.searchInput} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#5DDCAE',
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      flex: 1, // esto hace que este contenedor ocupe todo el espacio posible, dejando solo el espacio necesario para los otros elementos
      alignItems: 'center', // esto centra el texto horizontalmente
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    backButton: {
      padding: 10,
    },
    searchInput: {
      flex: 1,
      padding: 5,
    },
    chatItemContainer: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    chatInfo: {
      flex: 1,
    },
    userName: {
      fontWeight: 'bold',
    },
    userMessage: {
      color: 'green',
    },
    backIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    searchContainer: {
      flexDirection: 'row',
      borderColor: '#ccc',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
      alignItems: 'center', // Alinea verticalmente el ícono y el input
      padding: 10,
    },
    searchIcon: {
      width: 20,
      height: 20,
      marginRight: 10, // Espacio entre el ícono y el TextInput
    },
  });

export default PagoConsumidorScreen;
