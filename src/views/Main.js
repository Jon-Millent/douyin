import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  StatusBar
} from "react-native";

import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "react-native-parallax-swiper";

import {getPx, deviceWidth, deviceHeight} from "../util/Screen";


export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.myCustomAnimatedValue = new Animated.Value(0);
  }


  render() {
    return (

      <View style={[MainPage.wrap]}>
        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" />
        <ParallaxSwiper
          speed={0.5}
          animatedValue={this.myCustomAnimatedValue}
          dividerWidth={8}
          dividerColor="black"
          backgroundColor="#fff"
          onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
          vertical={true}
        >
          <ParallaxSwiperPage
            BackgroundComponent={
              <View style={[
                MainPage.backgroundBox,
                {
                  backgroundColor: '#ccc'
                }
              ]}>
              </View>
            }
            ForegroundComponent={
              <View>
                <Text>Page 1</Text>
              </View>
            }
          />

          <ParallaxSwiperPage
            BackgroundComponent={
              <View style={[
                MainPage.backgroundBox,
                {
                  backgroundColor: '#999'
                }
              ]}>
              </View>
            }
            ForegroundComponent={
              <View>
                <Text>Page 2</Text>
              </View>
            }
          />

          <ParallaxSwiperPage
            BackgroundComponent={
              <View style={[
                MainPage.backgroundBox,
                {
                  backgroundColor: '#666'
                }
              ]}>
              </View>
            }
            ForegroundComponent={
              <View>
                <Text>Page 3</Text>
              </View>
            }
          />

        </ParallaxSwiper>
      </View>

    );
  }
}


const MainPage = StyleSheet.create({
  wrap: {
    backgroundColor: '#333',
    width: deviceWidth,
    height: deviceHeight
  },
  backgroundBox: {
    width: deviceWidth,
    height: deviceHeight
  }
})

