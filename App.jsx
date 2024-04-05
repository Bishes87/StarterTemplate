import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Test} from "@constants"
if (__DEV__) {
  import("./ReactotronConfig.js").then(() => console.log("Reactotron Configured"));
}
const App = () => {
  console.log(Test)
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