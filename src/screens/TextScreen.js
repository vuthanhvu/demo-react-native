import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('Quynh Phap');
    return (
        <View>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={ newValue => setName(newValue)}
            />
            <Text>My name is {name}</Text>
            {name.length > 5 ? <Text>Name is valid</Text>: null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        margin: 15,
    }
})

export default TextScreen
