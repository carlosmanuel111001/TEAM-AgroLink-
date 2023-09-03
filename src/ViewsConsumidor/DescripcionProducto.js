import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DescripcionProducto = ({route, navigation}) => {
  const {product} = route.params;

  const handleBuyPress = () => {
    navigation.navigate('Pagar', {
      productName: product.name,
      productPrice: product.price,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={require('../assets/regreso.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalles del Producto</Text>
      </View>

      <Image source={product.image} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.label}>Ubicación:</Text>
        <Text style={styles.dataText}>{product.location}</Text>
        <Text style={styles.label}>Precio:</Text>
        <Text style={styles.dataText}>${product.price}</Text>
        <Text style={styles.label}>Fecha de Disponibilidad:</Text>
        <Text style={styles.dataText}>{product.availabilityDate}</Text>
        <Text style={styles.label}>Cantidad:</Text>
        <Text style={styles.dataText}>{product.quantity}</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.messageButton}>
          <Image
            source={require('../assets/mensaje.png')}
            style={styles.messageIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 3,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  dataText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buyButton: {
    backgroundColor: '#2ECC71', // Verde vibrante
    borderRadius: 25,
    paddingHorizontal: 60,
    paddingVertical: 15,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  messageButton: {
    backgroundColor: '#EAEDED',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 3,
  },
  messageIcon: {
    width: 28,
    height: 28,
    tintColor: '#3498DB',
  },
});

export default DescripcionProducto;
