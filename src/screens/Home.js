import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({navigation}) => {
  return (
    <View style={{margin:100}}>
      <Text >Home</Text>
      <TouchableOpacity style={{borderWidth:1,padding:10}} onPress={()=>navigation.navigate('SelectLanguage')}><Text>Select Test</Text></TouchableOpacity>
    </View>
  )
}

export default Home