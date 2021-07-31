import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const Counter = (props) => {
    // const [counter, setCounter] = useState(0);
    
    // const handleDecrease = () => {
    //     setCounter(counter + 1);
    // }
    // const handleIncrease = () => {
    //     setCounter(counter - 1);
    // }

    const { color , handleDecrease, handleIncrease } = props; 
    console.log(color);

    return (
        <View>
            <Button title="Decrease" onPress={handleDecrease} />
            <Button title="Increase" onPress={handleIncrease}/>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` }} />
        </View>
    )
    
}

export default Counter
