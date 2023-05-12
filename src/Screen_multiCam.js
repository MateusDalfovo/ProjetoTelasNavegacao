import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export class TelaMultiCam extends React.Component {
  render(){
  return (
    <View style={styles.container}>
    <Card>
        <AssetExample />
      </Card>
      
      <TouchableOpacity style={styles.botao1}> <Text> Assinar novo plano </Text> </TouchableOpacity>
      <TouchableOpacity style={styles.botao2}> <Text> Redefinir dispositivos </Text></TouchableOpacity>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    
  },

  botao1:{
    height: 30, 
    width: 200,
    backgroundColor: '#5aa2d0',
    color: 'white',
    borderRadius: 5,
    marginBottom: 5,
    marginTop: -80,
    zIndex: 2,
  },
  
  botao2:{
  
  height: 30,
  width: 200,
  backgroundColor: '#5aa2d0',
  color: 'white',
  borderRadius: 5,
  marginBottom: 600,
  zIndex: 2,
  },
});

export default TelaMultiCam;