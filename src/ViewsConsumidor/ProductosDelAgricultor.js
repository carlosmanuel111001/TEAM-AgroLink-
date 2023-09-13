import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const ProductosDelAgricultor = ({route, navigation}) => {
  const {agricultorId, selectedProduct} = route.params;

  const productos = [
    {id: '1', name: 'Manzana', agricultorId: '123'},
    {id: '2', name: 'Plátano', agricultorId: '123'},
    {id: '3', name: 'Uva', agricultorId: '123'},
    {id: '4', name: 'Pera', agricultorId: '123'},
    {id: '5', name: 'Mango', agricultorId: '123'},
    {id: '6', name: 'Fresa', agricultorId: '123'},
  ];

  const otherProducts = productos.filter(
    product => product.id !== selectedProduct.id,
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/regreso.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Productos del Agricultor</Text>
      </View>

      <View style={styles.selectedProductContainer}>
        <Text style={styles.selectedProductLabel}>Producto Seleccionado:</Text>
        <Text style={styles.selectedProductName}>{selectedProduct.name}</Text>
      </View>

      <Text style={styles.otherProductsHeader}>Más productos de este agricultor:</Text>

      <FlatList
        data={otherProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.productItem}
            onPress={() =>
              navigation.navigate('DescripcionProducto', {product: item})
            }>
            <Text style={styles.productText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  backIcon: {
    width: 25,
    height: 25,
    tintColor: '#2E8B57',
    marginRight: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2E8B57',
  },
  selectedProductContainer: {
    padding: 20,
    backgroundColor: '#E6F4EA',
    borderRadius: 10,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  selectedProductLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  selectedProductName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E8B57',
  },
  otherProductsHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  productItem: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E1E9EE',
  },
  productText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#212121',
  },
});

export default ProductosDelAgricultor;
