import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Components from '@components'
if (__DEV__) {
  import("./ReactotronConfig.js").then(() => console.log("Reactotron Configured"));
}
const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})