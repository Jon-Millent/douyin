import React, { Component } from 'react';

/*
import { Router, Scene } from 'react-native-router-flux';//引入包

import MainScreen from './views/Main';

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



import {StackNavigator} from 'react-navigation';
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

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
});

export default RootNavigator;
