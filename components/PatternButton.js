import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function PatternButton({pattern}) {

  const changePattern = () => {
    axios.patch(`https://hex-ights.firebaseio.com/.json?auth=` + 
    process.env.REACT_APP_FB_AUTH_KEY, {"pattern": pattern})
    .then((response) => {
        console.log(response + ` successfully changed pattern to ` + pattern)
    })
    .catch((error) => {
        console.log(error + ` pattern was not successfully changed to ` + pattern)
    });
  }

  return (
    <Pressable style={styles.button} onPress={changePattern}>
      <Text style={styles.text}>{pattern}</Text>
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
    borderRadius: 10,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

PatternButton.propTypes = {
  pattern: PropTypes.string.isRequired,
};
