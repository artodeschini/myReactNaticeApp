import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(argumento) {
    this.setState({
      nome: argumento
    })
  }

  render(){
    return(
      <View style={ styles.area } >

        <Text style={ [styles.textoPrincipal, styles.alinhaTextoCentro] }>Exemplo texto 1</Text>
        <Text style={ styles.alinhaTextoCentro}>Exemplo texto 2</Text>
        <Text>Exemplo texto 3</Text>
        <Text>Exemplo texto 4</Text>
        <Text>Exemplo texto 5</Text>
        <Text style={ styles.textoPrincipal}>Exemplo texto 6</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  area: {
    marginTop: 40
  },

  textoPrincipal: {
    fontSize: 25,
    color: '#FF0000'
  },

  alinhaTextoCentro: {
    textAlign: 'center'
  }

});

export default App;