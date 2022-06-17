import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Switch, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";


class App extends Component {

  /*
   * Nome TextInput
   * Idade TextInput
   * Sexo Picker
   * Limite Slider
   * Estudante Switch
   * Botão (validacao) => mostrar num alert
   */
  constructor(props) {
    super(props);
    this.state = {

      valido: false,

      nome: '',
      nomeValido: false,
      idade: '',
      idadeValida: false,
      sexo: 'Masculino',
      estudante: false,
      limite: 0
    };

    this.pegaNome = this.pegaNome.bind(this);
    this.pegaIdade = this.pegaIdade.bind(this);
    this.enviarDados = this.enviarDados.bind(this);
  }

  pegaNome(texto) {
    if (texto.length > 0) {
        this.setState({
          nome: texto,
          nomeValido: true
      })
    } else {
      this.setState({
        nome: '',
        nomeValido: false
      })
    }   
  }

  pegaIdade(texto) {
    if (texto.length > 0) {
      this.setState({
        idade: texto,
        idadeValida: true
      })
    } else {
      this.setState({
        idade: '',
        idadeValida: false
      })
    }   
  }

  enviarDados() {
    if (this.state.nomeValido && this.state.idadeValida && this.state.limite > 0 ) {
      this.setState({ valido: true});
    } else {
      this.setState({ valido: false});
      alert('Revise seus dados');
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input} 
          placeholder="Digite o seu nome"
          onChangeText={this.pegaNome}>
        </TextInput>

        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}  
          placeholder="Digite sua idade"
          keyboardType='numeric'
          onChangeText={this.pegaIdade}>
        </TextInput>

        <Text style={styles.label}>Sexo:</Text>
        <Picker 
          selectedValue={this.state.sexo}
          onValueChange={ (itemValue, itemIndex) => 
            this.setState({
              sexo: itemValue
            })
          }>
          <Picker.Item key={'0'} value={"Masculino"} label={"Masculino"}></Picker.Item>
          <Picker.Item key={'1'} value={"Feminino"} label={"Feminino"}></Picker.Item>
         </Picker>

        <Text style={styles.label}>Limite:</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({limite: valorSelecionado})}
          value={this.state.valor}
        /> 

        <Text style={styles.label}>Estudante:</Text>
        <Switch
          value={this.state.estudante}
          onValueChange={(valorSwitch) => this.setState({ estudante: valorSwitch})}
        />

        <Button 
          title="Enviar" 
          onPress={this.enviarDados}
          style={styles.btn}>
        </Button>

        <Text style={styles.label}> 
          { this.state.valido && this.state.nomeValido ? 'Nome informado: ' + this.state.nome : ''}
        </Text>
        <Text style={styles.label}> 
          { this.state.valido && this.state.idadeValida ? 'Idade informado: ' + this.state.idade : ''}
        </Text>
        <Text style={styles.label}> 
          {this.state.valido ? 'Sexo informado: ' + this.state.sexo : ''}
        </Text>
        <Text style={styles.label}> 
          { this.state.valido && this.state.limite > 0 ? 'Limite informado: ' + this.state.limite.toFixed(2) : ''}
        </Text>
        <Text style={styles.label}> 
          {this.state.valido ? (this.state.estudante ? 'Estudade: Sim' : 'Estudade: Não') : ''}
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 15
  },

  label: {
    fontSize: 20, 
    margin: 10
  },

  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20
  },

  btn: {
    marginTop: 15
  }


});

export default App;