import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'decrease':
            return { ...state, counter: state.counter - 1 };
        case 'increase':
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
}

const CounterColor = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button title="Decrease" 
                onPress={ () => dispatch({ type: 'decrease'})} 
            />
            <Button title="Increase" 
                onPress={ () => dispatch({ type: 'increase'})}
            />
            <Text>{state.counter}</Text>
        </View>
    )
}

export default CounterColor
