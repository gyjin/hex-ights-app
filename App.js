import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonContainer from './components/ButtonContainer';

export default function App() {
  const image = require('./images/bg.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <StatusBar style="auto"/>
        <Text style={styles.title}>Hello Hexights!</Text>
        <ButtonContainer containerName={"patterns"} buttonLabels={
          [
            "solid",
            "blink",
            "wave",
            "fade",
            "twinkle",
            "run",
            "off"
          ]
        }></ButtonContainer>
        <ButtonContainer containerName={"colors"} buttonLabels={
          {
            "red": [20, 0, 0],
            "orange": [20, 5, 0],
            "yellow": [20, 12, 0],
            "green": [0, 20, 0],
            "blue": [0, 0, 20],
            "purple": [12, 0, 20],
          }
        }></ButtonContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 50,
    color: 'white',
    backgroundColor: 'transparent'
  }
});
