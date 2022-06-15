import React, { Component } from "react";
import { View, Text, Image } from 'react-native'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Artur'
    };
  }

  render(){
    return(
      <View style={{ marginTop: 20 }} >
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center'}}>
          {this.state.name}</Text>
      </View>
    );
  }

}

export default App;