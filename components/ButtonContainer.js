import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';


export default function ButtonContainer({containerName, buttonLabels}) {
  
  const makeButtonCollection = () => {
    console.log("make button collection")
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