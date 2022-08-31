import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function Lista(props) {
  return (
    <View style={styles.list}>

      <FlatList
        data={props.dados}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={item => item}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    color: 'dimgrey',
    backgroundColor: 'dimgrey',
    marginTop: 10,
    padding: 10,
    fontSize: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#333',
    width: '80%',
    height: '53%',
    alignItems: 'center',
    shadowColor: '#333',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  textlist: {
    color: 'lightgrey'
  }
});
