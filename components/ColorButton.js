import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';

export default function ColorButton({color}) {

  const pressButton = () => {
    console.log(color + ' button pressed')
  }

  return (
    <Pressable style={styles.button} backgroundColor={color} onPress={pressButton}>
      <Text style={styles.text}>{color}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
};