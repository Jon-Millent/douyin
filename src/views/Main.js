import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "react-native-parallax-swiper";

import ExtraDimensions from 'react-native-extra-dimensions-android';
import {getPx, deviceWidth} from "../util/Screen";

import { Iconfont } from "../static/font/iconfont";


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
                <Iconfont name="icon-bqxin" size={60}></Iconfont>
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
    backgroundColor: '#384',
    flex: 1
  },
  backgroundBox: {
    width: deviceWidth,
    height: ExtraDimensions.get('REAL_WINDOW_HEIGHT') + ExtraDimensions.get('STATUS_BAR_HEIGHT')
  }
})

