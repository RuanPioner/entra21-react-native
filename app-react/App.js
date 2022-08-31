import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Lista from './src/components/ListaComp'
import Inserir from './src/components/InserirComp'

export default function App() {

  const [nomes, setNomes] = React.useState([])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lista de Nomes</Text>

      <Inserir
        nomes={nomes}
        setNomes={setNomes}
      />

      <Lista
        dados={nomes}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    width: 350,
    margin: 'auto',
    height: 480,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#333',
    shadowColor: '#333',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  item: {
    backgroundColor: 'dimgrey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    padding: 5,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 40
  },
  button: {
    margin: 'auto',
    backgroundColor: 'dimgrey',
    color: 'lightgrey',
    padding: 10
  }
});




