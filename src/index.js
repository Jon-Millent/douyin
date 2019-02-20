import React, { Component } from 'react';

/*
import { Router, Scene } from 'react-native-router-flux';//引入包


const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
               key="main"
               component={MainScreen}
               title="main"
               hideNavBar={true}
               initial
        />
      </Scene>
    </Router>
  );
}

export default App;
*/


import {
  View,
  Text
} from 'react-native'

import MainScreen from './views/Main';

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
const HomeScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home Screen</Text>
  </View>
);

const DetailScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Detail Screen</Text>
  </View>
);

const TabNavigator = createBottomTabNavigator({
  Home: MainScreen,
  Detail: DetailScreen,
});

export default createAppContainer(TabNavigator);
