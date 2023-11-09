import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button'


export default function ButtonContainer({containerName, buttonLabels}) {
  
  const makeButtonCollection = () => {
    console.log("make button collection")
    let buttonCollection = [];
    buttonCollection = buttonLabels.map((label, i) => {
      return <Button title={label} key={i}></Button>
    });

    return buttonCollection;
  }

  return (
    <View> 
      <Text>{containerName}, {buttonLabels}</Text>
      {makeButtonCollection()}
    </View>
  );
}

ButtonContainer.propTypes = {
  containerName: PropTypes.string.isRequired,
  buttonLabels: PropTypes.array.isRequired
};