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

        <View style={styles.topView}>
          <Text style={styles.title}>Hex-ights</Text>
          <View style={styles.line} />
          <Text style={styles.slogan}>light up your life!</Text>
        </View>


        <Text style={styles.buttonContainerLabel}>Patterns:</Text>
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
        <Text style={styles.buttonContainerLabel}>Colors:</Text>
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
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'center'
  },
  topView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 60
  },
  title: {
    marginTop: 40,
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginVertical: 2,
    width: '75%',
    alignSelf: 'center'
  },
  slogan: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white',
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  buttonContainerLabel: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
