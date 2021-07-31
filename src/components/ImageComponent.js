import React from 'react'
import { View, Image, Text } from 'react-native';

const ImageComponent = (props) => {
    const {srcImage, title} = props;
    return (
         <View>
            <Text>{title}</Text>
            <Image 
                source={srcImage}
            />
        </View>
    )
}

export default ImageComponent
