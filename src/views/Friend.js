import React, {Component} from 'react';
import ExtraDimensions from 'react-native-extra-dimensions-android';

import {
  View,
  Text, StatusBar
} from 'react-native';

type Props = {};

const Values = {
  STATUS_BAR_HEIGHT: ExtraDimensions.get('STATUS_BAR_HEIGHT'),
  REAL_WINDOW_HEIGHT: ExtraDimensions.get('REAL_WINDOW_HEIGHT'),
  SOFT_MENU_BAR_HEIGHT: ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'),
}


export default class App extends Component<Props> {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <View>
        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" />
        <View style={{
          height: Values.STATUS_BAR_HEIGHT,
          backgroundColor: '#000'
        }}>
          <Text style={{color: '#E00', textAlign: 'center'}}>{Values.STATUS_BAR_HEIGHT}</Text>
        </View>

        <View style={{
          height: Values.REAL_WINDOW_HEIGHT,
          backgroundColor: '#666'
        }}>
          <Text style={{color: '#E00', textAlign: 'center'}}>{Values.REAL_WINDOW_HEIGHT}</Text>
        </View>
      </View>
    )

  }

}
