import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const DetallesPagoConsumidor = ({route, navigation}) => {
  const name = route && route.params ? route.params.name : 'Nombre por defecto';
  const amount = 'C$XXX';
  const orderId = 'YYY';

  const handleConfirm = () => {
    Alert.alert(
      'Confirmación',
      'Pago realizado exitosamente',
      [{text: 'OK', onPress: () => navigation.goBack()}],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/regreso.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Has realizado un pago a</Text>
          <Text style={styles.headerTextName}>{name}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.smallCard]}>
          <Text style={styles.cardHeaderText}>Información del Pago</Text>
          <View style={styles.subsection}>
            <View style={[styles.infoCard, styles.halfSubCard]}>
              <Text style={styles.infoText}>Realizaste un pago a:</Text>
              <Text style={styles.infoValue}>{name}</Text>
            </View>
            <View style={[styles.infoCard, styles.halfSubCard]}>
              <Text style={styles.infoText}>Por el monto de:</Text>
              <Text style={styles.infoValueWithLine}>{amount}</Text>
              <Text style={styles.infoText}>Referente al pedido:</Text>
              <Text style={styles.infoValueWithLine}>{orderId}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.card, styles.largeCard]}>
          <Text style={styles.cardHeaderTextLeft}>Detalles del Pedido</Text>

          <View style={styles.subsection}>
            <View style={[styles.infoCard, styles.quarterCard]}>
              <Text style={styles.infoHeaderText}>Nombre del Producto</Text>
            </View>
            <View style={[styles.infoCard, styles.quarterCard]}>
              <Text style={styles.infoHeaderText}>Descripción</Text>
            </View>
          </View>

          <View style={styles.subsection}>
            <View style={[styles.infoCard, styles.quarterCard]}>
              <Text style={styles.infoHeaderText}>Precio</Text>
            </View>
            <View style={[styles.infoCard, styles.quarterCard]}>
              <Text style={styles.infoHeaderText}>Fecha</Text>
            </View>
          </View>

          <View style={[styles.infoCard, styles.halfCard]}>
            <Text style={styles.infoHeaderText}>Cantidad</Text>
          </View>

          <View style={[styles.infoCard, styles.fullCard]}>
            <Text style={styles.infoHeaderText}>Imagen del Producto</Text>
            {/* <Image source={tuImagen} style={styles.productImage} /> */}
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.acceptButton} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DB075',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#5DDCAE',
    padding: 15,
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  headerTextName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  cardContainer: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10, // da bordes redondeados
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // da sombra a la tarjeta
    marginBottom: 15,
  },
  cardHeaderText: {
    fontSize: 18, // Tamaño de letra más grande
    fontWeight: 'bold', // Letra en negrita
    marginBottom: 5, // Espacio adicional debajo del encabezado
    color: 'black',
    textAlign: 'center',
  },
  cardHeaderTextLeft: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10, // Espacio adicional arriba del encabezado
    marginBottom: 10, // Espacio adicional debajo del encabezado
    textAlign: 'center', // Cambio de textAlign a 'left'
    color: 'black',
  },
  cardText: {
    fontSize: 16,
    color: '#5DB075', // Color que especificaste
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 16,
    color: '#5DB075',
    textAlign: 'center', // Centrar el valor
  },
  smallCard: {
    backgroundColor: 'white',
    padding: 10, // Reducido el padding.
    margin: 5, // Reducido el margen.
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
  largeCard: {
    flex: 2, // Esto indica que la tarjeta 2 ocupará 2 partes del espacio disponible
    padding: 20,
  },
  acceptButton: {
    backgroundColor: 'white',
    borderRadius: 25, // Esto hace que tenga bordes redondeados
    paddingVertical: 10, // Menos padding vertical
    paddingHorizontal: 30, // Más padding horizontal para que sea más ancho que alto
    alignSelf: 'center', // Esto centra el botón en su contenedor
    marginTop: 18,
    marginBottom: 30, // espacio adicional en la parte inferior
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    color: 'black', // Cambio del color del texto
    fontWeight: 'bold',
    fontSize: 16, // Disminuido el tamaño de la fuente para que quede más compacto
  },

  subsection: {
    flexDirection: 'row', // Coloca las tarjetas en una fila
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  halfSubCard: {
    width: '48%',
    marginHorizontal: '1%',
  },
  infoText: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    textAlign: 'left',
  },

  infoValue: {
    fontSize: 20,
    color: '#5DB075',
    textAlign: 'left',
    marginTop: 5,
  },

  infoValueWithLine: {
    fontSize: 20,
    color: '#5DB075',
    textDecorationLine: 'underline',
    textAlign: 'left',
    marginTop: 5,
  },
  quarterCard: {
    width: '48%', // Aproximadamente la mitad del espacio, teniendo en cuenta el gap
  },
  halfCard: {
    width: '100%',
    marginBottom: 5,
  },
  fullCard: {
    flex: 1,
  },
  infoHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  locationCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 10, // Espacio superior para separación
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 100, // Ajusta según lo necesites
    resizeMode: 'contain',
  },
});

export default DetallesPagoConsumidor;
