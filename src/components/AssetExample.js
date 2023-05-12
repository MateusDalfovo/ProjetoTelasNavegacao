import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       
      </Text>
      <Image style={styles.logo} source={require('../assets/logosurf.png')} />
      <Image style={styles.login} source={require('../assets/usuario.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#000000',

  },
  paragraph: {
    margin: 10,
    marginTop: -380,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    marginTop: -100,
    height: 140,
    width: 140,
  },

  login: {
    marginTop: 10,
    height: 40,
    width: 40,
  },
});
