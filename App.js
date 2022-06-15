import React from "react";
import { View, Text, Image } from 'react-native'


function App() {
  return(
    <View>
      <Text>Ola Mundo</Text>
      <Text>Meu primeiro App</Text>
      <Text style={{ color: 'red', fontSize: 25, margin: 15 }} >
        Artur Todeschini Crestani</Text>

      <Image 
         // obrigatorio source e style com width and height 
        source={{ uri: 'https://sujeitoprogramador.com/steve.png'}}
        style={{ width: 300, height: 300 }}
        />
    </View>
  )
}

export default App;