import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import PatternButton from './PatternButton'
import ColorButton from './ColorButton';


export default function ButtonContainer({containerName, buttonLabels}) {
  
  const makeButtonCollection = () => {
    let buttonCollection = [];

    if (containerName === "patterns") {
      buttonCollection = buttonLabels.map((label, i) => {
        return <PatternButton pattern={label} key={i}></PatternButton>
      });
    }

    if (containerName === "colors") {
      buttonCollection = buttonLabels.map((label, i) => {
        return <ColorButton color={label} key={i}></ColorButton>
      });
    }

    return buttonCollection;
  }

  return (
    <View>
      <Text>{containerName}</Text>
      {makeButtonCollection()}
    </View>
  );
}

ButtonContainer.propTypes = {
  containerName: PropTypes.string.isRequired,
  buttonLabels: PropTypes.array.isRequired
};