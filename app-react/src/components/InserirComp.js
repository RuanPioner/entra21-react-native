import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Inserir(props) {

    const [nome, setNome] = React.useState('')

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Informe um nome"
                onChangeText={setNome}
                value={nome}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (nome == '') {
                        alert("Insira um nome !")
                    } else {
                        props.setNomes([...props.nomes, nome])
                    }

                }}
            >
                <Text style={styles.textbutton}>Inserir</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'dimgrey',
        padding: 10,
        borderRadius: 10,
        color: 'lightgrey',
        width: 250,
        fontFamily: 'verdana',
        shadowColor: '#333',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#333',
    },
    button: {
        marginTop: 10,
        backgroundColor: 'dimgrey',
        padding: 8,
        borderRadius: 10,
        textAlign: 'center',
        width: 100,
        margin: 'auto',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#333',
        shadowColor: '#333',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    textbutton: {
        color: 'lightgrey'
    }
});