import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonContainer from './components/ButtonContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Hexights!</Text>
      <StatusBar style="auto" />
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
