import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Button
} from "react-native";

import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "../util/react-native-parallax-swiper";



const { width, height } = Dimensions.get("window");

export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {
      num: 0
    }
  }
  myCustomAnimatedValue = new Animated.Value(0);


  pressEvent(){
    this.setState({
      num: ++this.state.num
    })
  }

  getPageTransformStyle = index => ({
    transform: [
      {
        scale: this.myCustomAnimatedValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8), // Add 8 for dividerWidth
            index * (width + 8),
            (index + 1) * (width + 8)
          ],
          outputRange: [0, 1, 0],
          extrapolate: "clamp"
        })
      },
      {
        rotate: this.myCustomAnimatedValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8),
            index * (width + 8),
            (index + 1) * (width + 8)
          ],
          outputRange: ["180deg", "0deg", "-180deg"],
          extrapolate: "clamp"
        })
      }
    ]
  });

  render() {
    return (
      <ParallaxSwiper
        speed={0.5}
        animatedValue={this.myCustomAnimatedValue}
        dividerWidth={8}
        dividerColor="black"
        backgroundColor="black"
        onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
        showProgressBar={true}
        progressBarBackgroundColor="rgba(0,0,0,0.25)"
        progressBarValueBackgroundColor="white"
      >
        <ParallaxSwiperPage
          BackgroundComponent={
            <Image
              style={styles.backgroundImage}
              source={{ uri: "https://goo.gl/wtHtxG" }}
            />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <Animated.Text
                style={[styles.foregroundText, this.getPageTransformStyle(0)]}
              >
                Page 1 {this.state.num}
              </Animated.Text>
              <Button
                title={'test'}
                onPress={()=>{
                  this.pressEvent()
                }}
              />
            </View>
          }
        />
        <ParallaxSwiperPage
          BackgroundComponent={
            <Image
              style={styles.backgroundImage}
              source={{ uri: "https://goo.gl/gt4rWa" }}
            />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <Animated.Text
                style={[styles.foregroundText, this.getPageTransformStyle(1)]}
              >
                Page 2 {this.state.num}
              </Animated.Text>
              <Button
                title={'test'}
                onPress={()=>{
                  this.pressEvent()
                }}
              />
            </View>
          }
        />
        <ParallaxSwiperPage
          BackgroundComponent={
            <Image
              style={styles.backgroundImage}
              source={{ uri: "https://goo.gl/KAaVXt" }}
            />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <Animated.Text
                style={[styles.foregroundText, this.getPageTransformStyle(2)]}
              >
                Page 3 {this.state.num}
              </Animated.Text>
              <Button
                title={'test'}
                onPress={()=>{
                  this.pressEvent()
                }}
              />
            </View>
          }
        />
      </ParallaxSwiper>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width,
    height
  },
  foregroundTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  foregroundText: {
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 0.41,
    color: "white"
  }
});
