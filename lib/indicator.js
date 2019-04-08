'use strict'

import Style from './Style'
import React from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'

export default class Indicator extends React.Component {
  render () {
    var display_object = ''
      display_object = (
        <ActivityIndicator
          size='large'
          style={{ padding: 10}}
        />
      )
    return (
      <View style={Style.IndicatorWrap}>
        {display_object}
      </View>
    )
  }
}
