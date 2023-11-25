import { View, Text } from 'react-native'
import React from 'react'

const Result = ({route}) => {
    console.log(route)
  return (
    <View>
      <Text style={{marginTop:150 ,marginLeft:50}}>{route.params.score}/10</Text>
    </View>
  )
}

export default Result