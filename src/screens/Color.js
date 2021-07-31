import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const Color = () => {
    const [color, setColor] = useState([]);

    const handleAdded = () => {
        setColor([...color, randomRGB()]);
        console.log(color);
    }
    const randomRGB = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    return (
        <View>
            <Button title="Added a Color" onPress={handleAdded} />
            <Text>Color</Text>
            <FlatList
                keyExtractor={(item) => item}
                data={color}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
                }}
            />
            
        </View>
    )
}

export default Color
