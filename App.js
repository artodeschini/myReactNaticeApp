import React, { Component } from "react";
import { View, Text } from 'react-native'


class App extends Component {

  render(){
    return(
      //comportamento padrao box um em baixo do outro
      <View style={{ flex:1}}>
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'red'
        }}></View>
         <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'green'
        }}></View>
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'yellow'
        }}></View>
         <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'blue'
        }}></View>
      </View>
    );
  }

}

export default App;