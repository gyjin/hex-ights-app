import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonContainer from './components/ButtonContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Hexights!</Text>
      <StatusBar style="auto" />
      <ButtonContainer containerName={"patterns"} buttonLabels={["solid", "blink", "wave", "fade", "twinkle", "run", "off"]}></ButtonContainer>
      <ButtonContainer containerName={"colors"} buttonLabels={["red", "orange", "yellow", "green", "blue", "purple"]}></ButtonContainer>

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
