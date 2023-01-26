/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{
      width:'50%', 
      borderRadius: 25, 
      alignItems:'center', 
      height:'30%', 
      alignSelf:'flex-start', 
      left:20, 
      backgroundColor:'red'}}>
        <View style={{backgroundColor:'orange', flex:1, width:'80%'}}>
          <Text>Test</Text>
        </View>
      </View>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
