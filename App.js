import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === '') {
      alert("Digite o seu nome!");
      return;
    }
    this.setState({
      nome: 'Bem vindo: ' + this.state.input
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite o seu nome"
          underlineColorAndroid="transparent" // so funciona no android
          onChangeText={ (texto) => this.setState({ input: texto})}>
        </TextInput>

        <Button title="Entrar" onPress={this.entrar}></Button>

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