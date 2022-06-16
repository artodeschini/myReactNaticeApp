# Projeto de estudos de React-Native

## requesitos

- git
- Linux
- Java11
- Android/Sdk
- Android Studio
- Node 12
- npm
- nvm *opcional gerenciar versoes do node
- Visual Studio
- Emulador com 4096 Gb de ran

## install npx se não instalado

```bash
# não é necessario so documentado como criei o projeto

# verifica se foi instalado
npm list npx

# instala caso nao exista
npm install -g npx

# cria o projeto teplate basico
npx react-native init myApp   
```

## baixando as dependencias do projeto com npm 

```bash
npm clean install
```

## rum app

* dica abra o projeto em dois terminais

```bash
## no terminal 1 inicia o servidor
npm start


## no terminal 2 start o emulador do android
npx react-native run-android
```

## help git ver alteracoes realizadas

```bash
git log --oneline --graph
```

## git checkout em uma tag especifica

```bash
# git checkout tags/<valor da tag>
git checkout tags/1.0.0
```

## dependencias adicionadas ao react-native

- Picker (Combos)
 
```bash
npm install @react-native-picker/picker --save
```

- Slider (Barra de progressao)

```bash
npm install @react-native-community/slider --save
```
