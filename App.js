import React from 'react'
import PatternButton from './components/PatternButton';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonContainer from './components/ButtonContainer';
import ColorButton from './components/ColorButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Hexights!</Text>
      <StatusBar style="auto" />
      <PatternButton title={"i'm a button"}></PatternButton>
      <ButtonContainer containerName={"patterns"} buttonLabels={["button", "label", "in", "array"]}></ButtonContainer>
      <ColorButton color='green'></ColorButton>

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
