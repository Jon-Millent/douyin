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
  Image
} from 'react-native'

import MainScreen from './views/Main';

import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import {borderWidth, deviceHeight, deviceWidth, getPx} from "./util/Screen";


const DetailScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#137'}}>
    <View style={{
      width: deviceWidth,
      height: deviceHeight,
      backgroundColor: '#E00'
    }}></View>
  </View>
);

const tabOptions = {
  Main: {
    screen: MainScreen,
    navigationOptions: {
      tabBarLabel: '首页'
    }
  },
  Friend: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: '好友'
    }
  },
  Append: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ()=>{
        return (
          <Image
            source={require('./static/icon/add.png')}
            style={{
              width: getPx(79),
              height: getPx(52),
              marginTop: getPx(96)
            }}
          />
        )
      }
    }
  },
  Message: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: '消息'
    }
  },
  My: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: '我'
    }
  }
};

const TabbedNavigation = createBottomTabNavigator(tabOptions, {
  initialRouteName: 'Main',
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: true,
  tabBarOptions: {
    tinColor: '#fff',
    inactiveTintColor: '#b1b1b1',
    activeTintColor: '#fff',
    showIcon: true,
    showLabel: true,
    lazyLoad: true,
    upperCaseLabel: false,
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: getPx(88),
      lineHeight: getPx(88),
      borderTopWidth: borderWidth,
      borderColor: 'rgba(255, 255, 255, .6)'
    },
    labelStyle: {
      lineHeight: getPx(88),
      fontSize: getPx(30)
    },

  }
});

export default createAppContainer(TabbedNavigation);
