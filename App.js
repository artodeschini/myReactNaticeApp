import React, { Component } from "react";
import { View, Text, Image } from 'react-native'


function App() {

  let nome = 'Artur Todeschini Crestani';

  return(
    <View>
      <Text>Ola Mundo</Text>
      <Text>Meu primeiro App</Text>
      <Text style={{ color: 'red', fontSize: 25, margin: 15 }} >
        Texto em vernelho</Text>

      <Jobs largura={500} altura={200} nome={'Artur'}/>
      <Jobs largura={500} altura={200} fulano={'Jobs'}/>
      <Text style={{ fontSize:  30}}>{nome}</Text>
    </View>
  )
}

export default App;


// primeiro exemplo com componete

class Jobs extends Component {
  render() {

    let img = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Image
            source={{ uri: img}}
            //style={{ width: 300, height: 300 }}>
            style={{ width: this.props.largura, height: this.props.altura }}>
          </Image>
          <Text>{this.props.fulano}</Text>
      </View>
    );
  }
}