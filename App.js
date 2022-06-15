import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      textoFrase: "Siga os bons e aprenda com eles.",
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso e o medo do fracasso."
    ];
  }
  
  quebraBiscoito() {
    let aleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[aleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        

        <Image 
          source={this.state.img}
          style={styles.img}>
        </Image>

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  img: {
    width: 250,
    height: 250,

  },

  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },

  // meu botao
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25
  },

  // area interna do botao
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },

  // texto do botao
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold", // negrito
    color:  "#dd7b22",
  }

});

export default App;