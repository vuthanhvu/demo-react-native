import React, { useState, useReducer } from 'react';
import { View, Text } from 'react-native';
import Counter from './Counter';

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0})
    return (
        <View>
            <Text>111</Text>
            <Counter
                handleDecrease={ () => dispatch({ colorToChange: 'red', amount: 15 })}
                handleIncrease={ () => dispatch({ colorToChange: 'red', amount: -1 * 15 })}
                color={state}
            />
        </View>
    )
}

export default SquareScreen
