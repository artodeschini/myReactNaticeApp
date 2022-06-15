import React, { Component } from "react";
import { View, Text } from 'react-native'


class App extends Component {

  render(){
    return(
      // comportamento padrao box um em baixo do outro ou flexDirection column
      // utilziando row os compoentes ficarao um ao lado do outro
      // usando justifyContent posso alinhar ao centro 
      // ou flex-end a direita e flex-start a esquerda
      // ou ainda space-between espacos iguais entre deles
      // ou ainda space-around espacos iguais ao redores deles

      // alignItems posso colocar no centro ou no comeco com flex-start ou no final com flex-end 

      <View style={{ 
        flex:1,
        flexDirection: 'row', // row , column
        justifyContent: 'center', // center, flex-start, flex-end
        alignItems: 'center' // center, flex-start, flex-end
        }}>
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'red'
        }}></View>
         <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'green'
        }}></View>
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'yellow'
        }}></View>
         <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'blue'
        }}></View>
      </View>
    );
  }

}

export default App;