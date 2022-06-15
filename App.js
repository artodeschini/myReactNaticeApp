import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto) {
    
      if (texto.length > 0) {
          this.setState({
            nome: 'Bem vindo: ' + texto
        })
      } else {
        this.setState({
          nome: ''
        })
      }   
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite o seu nome"
          onChangeText={this.pegaNome}>
        </TextInput>
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupara a tela toda

  },

  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 30
  },

  texto: {
    textAlign: "center",
    fontSize: 25
  }
});

export default App;