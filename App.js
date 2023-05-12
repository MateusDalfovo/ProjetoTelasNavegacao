import React from 'react';

import PlayerScreen from './src/ScreenLogin';
import TelaInicial from './src/ScreenInicial';
import TelaCupom from './src/ScreenCupom';
import TelaMultiCam from './src/Screen_multiCam';

import { View, Text, TouchableOpacity } from 'react-native';

import { Header, createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//telas

function HomeScreen({ navigation }){
  return(
    <View>
            <TouchableOpacity         
              onPress={() => {
                navigation.navigate(PlayerScreen)
              }}
            >  
              <Text>
                Login:
              </Text>              
            </TouchableOpacity> 

            <TouchableOpacity         
              onPress={() => {
                navigation.navigate(TelaCupom)
              }}
            >  
              <Text>
                Cupom:
              </Text>              
            </TouchableOpacity>
    </View> 
  )
}

function DiscoverScreen({ navigation }){
  return(
    <View>
        <TouchableOpacity         
              onPress={() => {
                navigation.navigate(TelaMultiCam)
              }}
            >  
              <Text>
                Multi Cameras:
              </Text>              
            </TouchableOpacity>

            <TouchableOpacity         
              onPress={() => {
                navigation.navigate(TelaInicial)
              }}
            >  
              <Text>
                Inicial:
              </Text>              
            </TouchableOpacity>
    </View>
  )
}

// ================ //
// ================ //
//Configuração de navegação (rotas)//

const ScreenStack = createStackNavigator();
function PodcastsTabStack() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen name="HomeScreen" component={HomeScreen} />
      <ScreenStack.Screen name="PlayerScreen" component={PlayerScreen}/>
      <ScreenStack.Screen name="TelaCupom" component={TelaCupom}/>
    </ScreenStack.Navigator>
  );
}

const TelasStack = createStackNavigator();
function TabStack() {
  return (
    <TelasStack.Navigator>
      <TelasStack.Screen name="Discovery" component={DiscoverScreen} />
      <TelasStack.Screen name="TelaMultiCam" component={TelaMultiCam}/>
      <TelasStack.Screen name="TelaInicial" component={TelaInicial}/>
    </TelasStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Menu" component={PodcastsTabStack} />
      <Tab.Screen name="Opções" component={TabStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}
//
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
