import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const cart = [];

const DescripcionProducto = ({route, navigation}) => {
  const {product} = route.params;

  const handleBuyPress = () => {
    navigation.navigate('Pagar', {
      productName: product.name,
      productPrice: product.price,
    });
  };

  const handleChatPress = () => {
    navigation.navigate('DetalleMensaje', {});
  };

  const handleAddToCart = () => {
    cart.push(product); // Agrega el producto al carrito.
    alert('Producto agregado al carrito!');
    navigation.goBack(); // Regresa a la pantalla anterior.
};

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
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

      <Image
        source={require('../assets/productos.png')}
        style={styles.productImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.label}>Ubicación:</Text>
        <Text style={styles.dataText}>{product.location}</Text>
        <Text style={styles.label}>Precio:</Text>
        <Text style={styles.priceText}>${product.price}</Text>
        <Text style={styles.label}>Fecha de Disponibilidad:</Text>
        <Text style={styles.dataText}>{product.availabilityDate}</Text>
        <Text style={styles.label}>Cantidad:</Text>
        <Text style={styles.dataText}>{product.quantity}</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Agregar al Carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.messageButton}
          onPress={handleChatPress}>
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
    backgroundColor: '#FFFFFF', // Fondo blanco para una apariencia más limpia.
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#212121', // Ícono oscuro para contraste.
  },
  headerTitle: {
    fontSize: 24, // Más grande para darle protagonismo.
    fontWeight: '700', // Más bold para destacar.
    color: '#212121',
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#F5F5F5', // Un gris claro para distinguir la sección.
    borderRadius: 10,
    padding: 20,
    marginBottom: 20, // Añado margen para separarlo del contenedor de botones.
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
    marginBottom: 20, // Más espacio para respirar entre secciones.
    lineHeight: 22,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5, // Un pequeño margen para separarlo del contenido.
  },
  dataText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10, // Consistente con el espaciado.
  },
  priceText: {
    fontSize: 22,
    color: '#E74C3C', // Rojo para llamar la atención al precio.
    marginBottom: 15,
    fontWeight: '700',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: '#3498DB', // Azul para la acción principal.
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: '48%', // Aproximadamente la mitad de la pantalla, dejando espacio para el margen.
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  messageButton: {
    backgroundColor: '#F5F5F5', // Igual que el contenedor de detalles.
    borderRadius: 25,
    padding: 15,
    width: '48%', // Aproximadamente la mitad de la pantalla, dejando espacio para el margen.
  },
  messageIcon: {
    width: 28,
    height: 28,
    tintColor: '#3498DB', // A juego con el botón de agregar al carrito.
    alignSelf: 'center', // Para que esté centrado en el botón.
  },
});

export default DescripcionProducto;
