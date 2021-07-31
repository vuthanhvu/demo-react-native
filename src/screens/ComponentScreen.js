import React from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'

const ComponentScreen = (props) => {
    const {navigation} = props;
    const friends = [
        {name: '#1'},
        {name: '#2'},
        {name: '#3'},
        {name: '#4'},
        {name: '#5'},
        {name: '#6'},
        {name: '#7'},
        // {name: '#1', key: '1'},
        // {name: '#2', key: '2'},
        // {name: '#3', key: '3'},
        // {name: '#4', key: '4'},
        // {name: '#5', key: '5'},
        // {name: '#6', key: '6'},
        // {name: '#7', key: '7'},
    ];
    return (
        <View>
            <Text style={styles.textStyle}>we are the world!</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}
                data={friends}
                renderItem={(element) => {
                    //element  === {item: {name: 'Friend #1'}, index: 0}
                    return <Text style={styles.listStyle}>{element.item.name}</Text>
                }}
            />
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Press to me"
                accessibilityLabel="Ai moi la nguoi thuong em"
            />
            <Button
                onPress={() => navigation.navigate('Color')}
                title="Press to me"
                accessibilityLabel="Ai moi la nguoi thuong em"
            />
            <Button
                onPress={() => navigation.navigate('SquareScreen')}
                title="Press SquareColor"
                accessibilityLabel="Ai moi la nguoi thuong em"
            />
            <Button
                onPress={() => navigation.navigate('CounterColor')}
                title="Press Counter Color"
                accessibilityLabel="Ai moi la nguoi thuong em"
            />
            <Button
                onPress={() => navigation.navigate('TextScreen')}
                title="Press Text Input"
                accessibilityLabel="Ai moi la nguoi thuong em"
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Counter')}
            >
                <Text>Press to Counter Page</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'brown',
        fontSize:30
    },
    listStyle: {
        color: 'red',
        fontSize:30,
        marginBottom: 100,
        marginRight: 100,
    }
})

export default ComponentScreen
