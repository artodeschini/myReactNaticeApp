import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feed: [
        {id: '1', nome: "Artur", idade: 45, email: "artodeschini@gmail.com"},
        {id: '2', nome: "Emanuelle", idade: 7, email: "manu@gmail.com"},
        {id: '3', nome: "Catia", idade: 40, email: "catia.silveira@gmail.com"},
        {id: '4', nome: "Liria", idade: 40, email: "liria@gmail.com"},
        {id: '5', nome: "Estevan", idade: 47, email: "estevan@gmail.com"},
        {id: '6', nome: "Camila", idade: 40, email: "camila@gmail.com"},
        {id: '7', nome: "Fred", idade: 2, email: "fredred@gmail.com"},
        {id: '8', nome: "Leticia", idade: 45, email: "leticai@gmail.com"},
        {id: '9', nome: "Otavio", idade: 47, email: "octavios@gmail.com"},
        {id: '10', nome: "Heloisa", idade: 8, email: "helo@gmail.com"}
      ]
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList 
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Pessoa dados={item}/> }
          ></FlatList>
      </View>
    );
  }
}

class Pessoa extends Component {
  render() {
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>
          Nome: {this.props.dados.nome}
        </Text>
        <Text style={styles.textoPessoa}>
          Idade: {this.props.dados.idade}
        </Text>
        <Text style={styles.textoPessoa}>
          e-mail: {this.props.dados.email}
        </Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1
  },

  areaPessoa: {
    backgroundColor: "#222",
    height: 200,
    marginBottom: 15
  },

  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }

});

export default App;