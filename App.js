import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numero: 0,
      txtBtnVai: "VAI",
      ultimo: null
    };

    //binds
    this.timer = null; // variavel do timer cronometro
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  // actions
  limpar() {
    if (this.timer != null) {
      // para o cronometro
      clearInterval(this.timer);
      this.timer = null;

    }
    this.setState({
      ultimo: this.state.numero, 
      txtBtnVai: 'VAI',
      numero: 0
    })
  }

  vai() {
    if (this.timer != null) {
      // para o cronometro
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ txtBtnVai: 'VAI'})

    } else {
      // comeca a girar o timer
      this.timer = setInterval( () => {
        this.setState({ numero: this.state.numero + 0.1})
      } , 100); // add 0.1 a cada centesimo
      this.setState({ txtBtnVai: 'PARAR'})
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.cronometro}>
        </Image>
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.txtBtnVai}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? "Último tempo:" + this.state.ultimo.toFixed(2) + "s" : ""}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef" // a cor da imagem do cronometro e branca
  },

  // tempo do cronometro
  timer: {
    marginTop: -160, // valores + fazem descer - subir
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },

  // funciona como um layout para agrupar os botoes
  btnArea: {
    flexDirection: 'row', // coloca um ao lado do outro
    marginTop: 100,
    margin: 40
  },

  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#FFF",
    margin: 40, // respeita a margem da area definida anteriormente
    margin: 20,
    borderRadius: 9 // arredondamento do botao
  },

  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
    // alignItems: "center",
    // justifyContent: "center"
  },

  areaUltimo: {
    marginTop: 30
  },

  textoCorrida: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#FFF"
  }

});

export default App;