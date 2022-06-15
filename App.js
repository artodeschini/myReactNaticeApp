import React from "react";
import { View, Text, Image } from 'react-native'


function App() {

  let nome = 'Artur Todeschini Crestani';
  let img = 'https://sujeitoprogramador.com/steve.png';


  return(
    <View>
      <Text>Ola Mundo</Text>
      <Text>Meu primeiro App</Text>
      <Text style={{ color: 'red', fontSize: 25, margin: 15 }} >
        Artur Todeschini Crestani</Text>

      <Image 
         // obrigatorio source e style com width and height 
        source={{ uri: img }}
        style={{ width: 300, height: 300 }}
        />
      <Text style={{ fontSize:  30}}>{nome}</Text>
    </View>
  )
}

export default App;