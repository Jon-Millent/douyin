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
  Text,
} from 'react-native'

import MainScreen from './views/Main';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';


const DetailScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Detail Screen</Text>
  </View>
);

const tabOptions = {
  Main: {
    screen: MainScreen
  },
  Checkout: {
    screen: DetailScreen
  }
};

const TabbedNavigation = createBottomTabNavigator(tabOptions, {
  initialRouteName: 'Main',
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: true,
  tabBarOptions: {
    tinColor: '#fff',
    activeTintColor: '#eee',
    inactiveTintColor: '#fff',
    showIcon: true,
    showLabel: true,
    lazyLoad: true,
    upperCaseLabel: false,
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    style: {
      backgroundColor: 'rgba(22, 22, 22, 0.3)',
      borderTopWidth: 3,
      borderTopColor: '#996600',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }
});

export default createAppContainer(TabbedNavigation);
