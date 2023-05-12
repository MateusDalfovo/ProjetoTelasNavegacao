import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export class PlayerScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>

       <Image style={styles.logo} source={require('./assets/logosurf.png')} />
      <Image style={styles.login} source={require('./assets/logo-usuario.png')} />
      
<View>
    <TextInput type="Text" placeholder="Email.." style={styles.input}/>

    <TextInput type="Text" placeholder="Senha.." style={styles.input}/>

  <Text style={styles.labelStyles}>{'\n'} Não lembro minha senha </Text>
</View>

<View>
  <Text style={styles.info}>{'\n'} Novo aqui? Cadastre-se </Text>
</View>

      
    </View>
  );}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },

 logo: {
   flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: -80,
    width: -150,
  },

  login: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 130,
    marginTop: -80,

    width: 75,
  
  },

  paragraph: {
    color: '#ffff',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#646464',
    width: 170,
    height: 14,
    margin: 2,
    marginLeft: 70,
  },

  labelStyles:{
    width: 170,
    height: -170,
    color: '#ffff',
    fontSize: 12,
    marginTop: -10,
    padding: 1,
    marginLeft: 70,
  },

  info:{
    fontSize: 12,
    padding: -1,
    color: '#ffff', 
    marginTop: 10,
    marginBottom: -10,
  },




});

export default PlayerScreen;