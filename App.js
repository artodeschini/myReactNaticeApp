import React, { Component } from "react";
import { View, Text } from 'react-native'


class App extends Component {

  render(){
    return(
      // flex 1 diz que para o componete usar a maior area possivel
      // flex 2 diz que ocupara 50 % e as outras duas 25%
      <View style={{ flex:1, backgroundColor: '#222'}}>
        <View style={{
          flex: 1,
          backgroundColor: 'red'
        }}></View>
         <View style={{
          flex: 1,
          backgroundColor: 'green'
        }}></View>
        <View style={{
          flex: 2,
          backgroundColor: 'yellow'
        }}></View>
      </View>
    );
  }

}

export default App;