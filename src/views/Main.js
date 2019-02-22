import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image
} from "react-native";
import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "react-native-parallax-swiper";

import ExtraDimensions from 'react-native-extra-dimensions-android';
import {getPx, deviceWidth, borderWidth} from "../util/Screen";
import Video from 'react-native-video';
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

        <View style={MainPage.header}>
          <View style={MainPage.headerLeft}>
            <Iconfont name="icon-camera_icon" size={getPx(40)} color="#bcbbbb"></Iconfont>
            <Text style={[MainPage.headerLeftText, MainPage.f1]}>随拍</Text>
          </View>
          <View style={MainPage.headerCenter}>
            <Text style={[MainPage.f2]}>推荐</Text>
            <Text style={MainPage.f3}>|</Text>
            <Text style={[MainPage.f1]}>郑州</Text>
          </View>
          <View style={MainPage.headerLeft}>
            <View style={MainPage.searchWrap}>
              <Iconfont name="icon-sousuo-copy" size={getPx(40)} color="#bcbbbb"></Iconfont>
              <View style={MainPage.searchTip}></View>
            </View>
          </View>
        </View>

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
                  backgroundColor: '#000'
                }
              ]}>
              </View>
            }
            ForegroundComponent={
              <View style={DouYinStyle.wrap}>
                <View style={DouYinStyle.descriptionBox}>
                  <Text style={DouYinStyle.userName}>
                    @吃鱼的帆
                  </Text>

                  <Text style={DouYinStyle.desText}>
                    啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
                  </Text>

                  <View style={DouYinStyle.musicForm}>

                    <Image
                      source={require('../static/icon/lmu.png')}
                      style={{
                        width: getPx(21),
                        height: getPx(24)
                      }}
                    />

                    <View style={DouYinStyle.musicGo}>
                      <Text style={DouYinStyle.musicGoText}>吃鱼的帆的原声音</Text>
                    </View>
                  </View>
                </View>
                <View style={DouYinStyle.rightMenu}>
                  <View style={DouYinStyle.userFaceBox}>
                    <View style={DouYinStyle.userFaceBoxBtn}>
                      <Iconfont name="icon-jia" size={getPx(40)} color="#fff" style={DouYinStyle.userFaceBoxIcon}></Iconfont>
                    </View>
                  </View>

                  <View style={DouYinStyle.publicIconBox}>
                    <View style={DouYinStyle.publicIconBoxIcon}>
                      <Iconfont name="icon-bqxin" size={getPx(68)} color="#fff" style={DouYinStyle.publicIconBoxIconTarget}></Iconfont>
                    </View>
                    <View style={DouYinStyle.publicIconBoxText}>
                      <Text style={DouYinStyle.publicIconBoxTextTarget}>39.6w</Text>
                    </View>
                  </View>


                  <View style={DouYinStyle.publicIconBox}>
                    <View style={DouYinStyle.publicIconBoxIcon}>
                      <Iconfont name="icon-pinglun" size={getPx(68)} color="#fff" style={DouYinStyle.publicIconBoxIconTarget}></Iconfont>
                    </View>
                    <View style={DouYinStyle.publicIconBoxText}>
                      <Text style={DouYinStyle.publicIconBoxTextTarget}>9.6w</Text>
                    </View>
                  </View>

                  <View style={DouYinStyle.publicIconBox}>
                    <View style={DouYinStyle.publicIconBoxIcon}>
                      <Iconfont name="icon-tiaoguofenxiang" size={getPx(68)} color="#fff" style={DouYinStyle.publicIconBoxIconTarget}></Iconfont>
                    </View>
                    <View style={DouYinStyle.publicIconBoxText}>
                      <Text style={DouYinStyle.publicIconBoxTextTarget}>分享</Text>
                    </View>
                  </View>


                  <View style={DouYinStyle.player}>
                    <View style={DouYinStyle.playerCover}></View>
                  </View>

                </View>

                <View style={DouYinStyle.videoBox}>
                  <Video source={{uri: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300f880000bgqsm2ge8b7s5rkne4ig"}}   // Can be a URL or a local file.
                         ref={(ref) => {
                         }}                                      // Store reference
                         style={DouYinStyle.videoBoxTarget} />
                </View>
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


const Values = {
  STATUS_BAR_HEIGHT: ExtraDimensions.get('STATUS_BAR_HEIGHT'),
  REAL_WINDOW_HEIGHT: ExtraDimensions.get('REAL_WINDOW_HEIGHT'),
  SOFT_MENU_BAR_HEIGHT: ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'),

}


const $Tool = {
  getIWantMenuBarHeight(){
    return getPx(Math.min(Values.SOFT_MENU_BAR_HEIGHT, 48))
  }
}

const MainPage = StyleSheet.create({
  wrap: {
    backgroundColor: '#000',
    flex: 1,
    position: 'relative'
  },
  backgroundBox: {
    width: deviceWidth,
    height: Values.REAL_WINDOW_HEIGHT + Values.STATUS_BAR_HEIGHT
  },
  header: {
    position: 'absolute',
    zIndex: 1000,
    top: getPx(20) + Values.STATUS_BAR_HEIGHT,
    left: 0,
    right: 0,
    height: getPx(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getPx(34)
  },
  headerLeft: {
    flexDirection: 'row',
    height: getPx(50),
    alignItems: 'center'
  },
  headerLeftText: {
    paddingLeft: getPx(10),
  },
  headerCenter: {
    flexDirection: 'row',
    height: getPx(50),
    alignItems: 'center'
  },
  headerRight: {

  },
  f1: {
    color: '#bcbbbb',
    fontSize: getPx(30),
    fontWeight: 'bold'
  },
  f2: {
    color: '#fff',
    fontSize: getPx(30),
    fontWeight: 'bold'
  },
  f3: {
    color: '#bcbbbb',
    fontSize: getPx(26),
    paddingHorizontal: getPx(28),
    fontWeight: 'bold'
  },
  searchWrap: {
    position: 'relative'
  },
  searchTip: {
    position: 'absolute',
    width: getPx(14),
    height: getPx(14),
    borderRadius: getPx(7),
    backgroundColor: '#face15',
    right: getPx(-14),
    top: getPx(-6)
  }
})

const DouYinStyle = StyleSheet.create({
  wrap: {
    flex: 1,
    position: 'relative',
  },
  rightMenu: {
    position: 'absolute',
    right: getPx(12),
    bottom: getPx(200) + $Tool.getIWantMenuBarHeight(),
    justifyContent: 'center',
    zIndex: 1000
  },
  userFaceBox: {
    width: getPx(94),
    height: getPx(94),
    borderRadius: getPx(47),
    position: 'relative',
    backgroundColor: '#fff',
    marginBottom: getPx(70)
  },
  userFaceBoxBtn: {
    position: 'absolute',
    width: getPx(36),
    height: getPx(36),
    borderRadius: getPx(18),
    backgroundColor: '#ff2b54',
    left: getPx(94 / 2 - 36 / 2),
    bottom: getPx(-20),
  },
  userFaceBoxIcon: {
    textAlign: 'center',
    lineHeight: getPx(38),
  },
  publicIconBox: {
    marginBottom: getPx(40)
  },
  publicIconBoxIcon: {
    width: getPx(92)
  },
  publicIconBoxIconTarget: {
    textAlign: 'center'
  },
  publicIconBoxText: {
    marginTop: getPx(15)
  },
  publicIconBoxTextTarget: {
    textAlign: 'center',
    color: '#fff',
    fontSize: getPx(24)
  },
  player: {
    width: getPx(94),
    height: getPx(94),
    backgroundColor: '#373737',
    borderRadius: getPx(47),
    position: 'relative',
    marginTop: getPx(40)
  },
  playerCover: {
    width: getPx(52),
    height: getPx(52),
    borderWidth: borderWidth,
    borderColor: '#000',
    borderStyle: 'solid',
    position: 'absolute',
    left: getPx(94 / 2 - 52 / 2),
    top: getPx(94 / 2 - 52 / 2),
    borderRadius: getPx(27),
    backgroundColor: '#ffffff',
  },
  descriptionBox: {
    position: 'absolute',
    bottom: getPx(200) + $Tool.getIWantMenuBarHeight(),
    left: getPx(20),
    zIndex: 1000
  },
  userName: {
    color: '#fff',
    fontSize: getPx(30),
    paddingBottom: getPx(22),
    fontWeight: 'bold'
  },
  desText: {
    color: '#fff',
    fontSize: getPx(30),
    width: getPx(500)
  },
  musicForm: {
    width: getPx(500),
    flexDirection: 'row',
    marginTop: getPx(30),
    alignItems: 'center'
  },
  musicGo: {
    width: getPx(300),
    paddingLeft: getPx(15)
  },
  musicGoText: {
    color: '#fff',
    fontSize: getPx(28),
  },
  videoBox: {
    flex: 1,
    position: 'relative',
    zIndex: 200
  },
  videoBoxTarget: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})