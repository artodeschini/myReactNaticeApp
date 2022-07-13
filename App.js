import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard} from 'react-native';

import AsyncStorage from "@react-native-community/async-storage";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: ''
     };

     this.gravaNome = this.gravaNome.bind(this);
  }

  // componentDidMount - quando o componente é montado em tela

  async componentDidMount() {
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({
        nome: value
      })
    })
  }

  // componentDidUpdate - quando o stage e atualizado faz algo 

  async componentDidUpdate(_,prevState) {
    const nome = this.state.nome;

    if (prevState !== nome) {
      await AsyncStorage.setItem('nome', nome); // ou direto this.state.nome
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso');
    Keyboard.dismiss(); // garante que o teclado vai fechar
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewinput}>
          <TextInput style={styles.input} value={this.state.input}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({input: text})}>

          </TextInput>
          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center"
  },

  viewinput: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },

  botao: {
    backgroundColor: '#222',
    color: 'white',
    height: 40,
    padding: 10,
    marginLeft: 4
  },

  nome: {
    fontSize: 30,
    textAlign: "center"
  }

});

export default App;