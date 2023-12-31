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
          <Image
            source={require('../assets/carrito.png')}
            style={styles.cartIcon}
          />
          <Text style={styles.buttonText}>Agregar al Carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.messageButton}
          onPress={handleChatPress}>
          <Image
            source={require('../assets/mensaje.png')}
            style={styles.messageIcon}
          />
          <Text style={styles.buttonText}>Mensaje</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo blanco para una apariencia más limpia.
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButton: {
    marginRight: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#212121', // Ícono oscuro para contraste.
  },
  headerTitle: {
    fontSize: 22, // Más grande para darle protagonismo.
    fontWeight: '700', // Más bold para destacar.
    color: '#212121',
  },
  productImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 15,
  },
  detailsContainer: {
    backgroundColor: '#F5F5F5', // Un gris claro para distinguir la sección.
    borderRadius: 8,
    padding: 15,
    marginBottom: 15, // Añado margen para separarlo del contenedor de botones.
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
    marginTop: 15,
    marginBottom: 15,
  },
  addToCartButton: {
    flexDirection: 'row', // Alineación horizontal para el ícono y el texto
    alignItems: 'center', // Centrado vertical
    backgroundColor: '#3498DB',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: '48%',
    elevation: 5, // Efecto de sombra para Android
    shadowOffset: {width: 1, height: 2}, // Sombras para iOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10, // Añadido un pequeño margen a la izquierda para separar el texto del ícono
  },
  cartIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFFFD6',
    borderRadius: 25,
    padding: 12,
    width: '48%',
    elevation: 5,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  messageIcon: {
    width: 24,
    height: 24,
    tintColor: '#3498DB',
    marginRight: 10, // Añadido un pequeño margen a la derecha para separar el ícono del texto
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,  // Añadido un pequeño margen a la izquierda para separar el texto del ícono
  },
});

export default DescripcionProducto;
