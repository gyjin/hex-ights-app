import React from 'react'
import Button from './components/Button';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonContainer from './components/ButtonContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Hexights!</Text>
      <StatusBar style="auto" />
      <Button title={"i'm a button"}></Button>
      <ButtonContainer containerName={"patterns"} buttonLabels={["button", "label", "in", "array"]}></ButtonContainer>

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
