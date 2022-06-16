import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Slider from "@react-native-community/slider";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: 0
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
          value={this.state.valor}
          minimumTrackTintColor='green'
          maximumTrackTintColor="red"
        />
        <Text style={{ textAlign: 'center', fontSize: 30}}>
          {this.state.valor.toFixed(1)}
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 15
  }
});

export default App;