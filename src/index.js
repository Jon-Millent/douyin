import React, { Component } from 'react';


import {
  View,
  Image,
  Alert
} from 'react-native'

import MainScreen from './views/Main';
import FriendScreen from './views/Friend';

import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import {borderWidth, deviceHeight, deviceWidth, getPx} from "./util/Screen";

// 底部tab配置
const tabOptions = {
  Main: {
    screen: MainScreen,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarOnPress(scene, jumpToIndex){
        // 打开这个tab播放暂停的视频
        console.log('onPress route:', scene);
        console.log('onPress index:', jumpToIndex);
      }
    }
  },
  Friend: {
    screen: FriendScreen,
    navigationOptions: {
      tabBarLabel: '好友',
      tabBarOnPress(scene, jumpToIndex){
        // 打开这个tab暂停正在播放的视频
        console.log('onPress route:', scene);
        console.log('onPress index:', jumpToIndex);
      }
    }
  },
  Append: {
    screen: FriendScreen,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ()=>{
        return (
          <Image
            source={require('./static/icon/add.png')}
            style={{
              width: getPx(80),
              height: getPx(53),
              marginTop: getPx(96)
            }}
          />
        )
      },
      tabBarOnPress(){
        Alert.alert(
          '提示',
          '体验版不提供发布视频功能'
        )
      }
    }
  },
  Message: {
    screen: FriendScreen,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarOnPress(scene, jumpToIndex){
        // 打开这个tab暂停正在播放的视频
      }
    }
  },
  My: {
    screen: FriendScreen,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarOnPress(scene, jumpToIndex){
        // 打开这个tab暂停正在播放的视频
      }
    }
  }
};

// 创建底部tab
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
