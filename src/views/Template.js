import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native';

type Props = {};


export default class App extends Component<Props> {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <View>
        <Text>Hello</Text>
      </View>
    )

  }

}
