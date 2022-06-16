import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// versoes antigas pode usar
// https://www.npmjs.com/package/@react-native-community/picker

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizza: 0,
      pizzas: [
         { key: '1', nome: 'Calabresa', valor: 35.90, },
         { key: '2', nome: '4 Queijos', valor: 39.90, },
         { key: '3', nome: 'Vegetariana', valor: 40.20, },
         { key: '4', nome: 'File 4 Queijos', valor: 29.90, },
         { key: '5', nome: 'Calabresa', valor: 32.90, },
         { key: '6', nome: 'Portuguesa', valor: 33.90, },
      ]
    }
  }

  render(){
 
    let pizzaItens = this.state.pizzas.map(
      (v, k) => {
        return <Picker.Item key={k} value={k} label={v.nome}></Picker.Item>
      }
    ); 

    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker 
          selectedValue={this.state.pizza}
          onValueChange={ (itemValue, itemIndex) => 
            this.setState({
              pizza: itemIndex
            })
          }>
          {/*
            valores fixos seria assim 
          <Picker.Item key={0} value={0} label={"Calabresa"}></Picker.Item>
          <Picker.Item key={1} value={1} label={"4 Queijos"}></Picker.Item>
          <Picker.Item key={2} value={2} label={"Vegetariana"}></Picker.Item>
          <Picker.Item key={3} value={3} label={"Gorgonzola"}></Picker.Item>
          <Picker.Item key={4} value={4} label={"File 4 Queijos"}></Picker.Item>
          <Picker.Item key={5} value={5} label={"Portuguesa"}></Picker.Item> 
          
          */}
          {pizzaItens}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu Pizza {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
        {/* <Text style={styles.pizzas}>{this.state.pizza}</Text> */}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20
  }, 

  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: "bold"
  },

  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: "center"
  }
});

export default App;