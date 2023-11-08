import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';

export default function Button({title}) {

const pressButton = () => {
    console.log(title + 'button pressed')
  }

  return (
    <Pressable style={styles.button} onPress={pressButton}>
      <Text style={styles.text}>{title}</Text>
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
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
};