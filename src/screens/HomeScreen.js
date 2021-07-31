import React from "react";
import { Text, StyleSheet, View } from "react-native";

import ImageComponent from "../components/ImageComponent";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Love me to me</Text>
      <ImageComponent title="Love me" srcImage={require('../../assets/beach.jpg')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red',
  }
});

export default HomeScreen;
