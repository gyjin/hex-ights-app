import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function ColorButton({color, rgb}) {

  const changeColor = () => {
    axios.patch(`https://hex-ights.firebaseio.com/.json?auth=` + 
    process.env.REACT_APP_FB_AUTH_KEY, {"red": rgb[0], "green": rgb[1], "blue": rgb[2]})
    .then((response) => {
        console.log(response + ` successfully changed color to ` + color)
    })
    .catch((error) => {
        console.log(error + ` color was not successfully changed to ` + color)
    });
  }

  return (
    <Pressable style={styles.button} backgroundColor={color} onPress={changeColor}>
      <Text style={styles.text}>{color}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: 100,
    margin: 5,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black'
  },
});

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  rgb: PropTypes.array.isRequired
};
