import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

const DetalleMensaje = ({route, navigation}) => {
  const messages = [
    {
      id: '1',
      text: 'Hola, ¿cómo estás?',
      type: 'received',
    },
    {
      id: '2',
      text: '¡Hola! Estoy bien, gracias. ¿Y tú?',
      type: 'sent',
    },
  ];

  const renderMessage = ({item}) => {
    const isReceived = item.type === 'received';

    return (
      <View
        style={[
          styles.messageContainer,
          isReceived
            ? styles.receivedMessageContainer
            : styles.sentMessageContainer,
        ]}>
        <Text
          style={[
            styles.messageText,
            isReceived ? styles.receivedMessageText : styles.sentMessageText,
          ]}>
          {item.text}
        </Text>
      </View>
    );
  };

  const name = route?.params?.name || 'Nombre'; // Aquí asumí que posiblemente pasas el nombre como parámetro a esta vista. Si no es el caso, ajusta según necesites.

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

        <View style={styles.nameAndIconContainer}>
          <TouchableOpacity style={styles.messengerIconWrapper}>
            <Image
              source={require('../assets/perfil.png')}
              style={styles.messengerIcon}
            />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.headerText}>{name}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.infoIconWrapper}>
          <Image
            source={require('../assets/informacion.png')}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.chatContainer}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/imagen.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../assets/audio.png')} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.messageInputWrapper}>
          <TextInput
            style={styles.messageInput}
            placeholder="Escribe un mensaje..."
          />
          <TouchableOpacity style={styles.sendIconWrapper}>
            <Image
              source={require('../assets/emoji.png')}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/enviar.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
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
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  sentMessageContainer: {
    backgroundColor: '#5DDCAE',
    alignSelf: 'flex-end',
  },
  receivedMessageContainer: {
    backgroundColor: '#E1F7EC',
  },
  messageText: {
    fontSize: 16,
  },
  sentMessageText: {
    color: 'white',
  },
  receivedMessageText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  messageInput: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  messageInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  messageInput: {
    flex: 1,
    padding: 10,
  },
  sendIconWrapper: {
    paddingRight: 10,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  nameAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  messengerIconWrapper: {
    marginRight: -100,
    
  },
  messengerIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    resizeMode: 'cover',
    marginRight: -10,
  },
  infoIconWrapper: {
    marginLeft: 'auto',
    paddingLeft: 10,
  },
  infoIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default DetalleMensaje;
