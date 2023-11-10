import React from 'react';
import { View } from 'react-native';
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
    } else if (containerName === "colors") {
      for (let index in buttonLabels) {
        buttonCollection.push(<ColorButton color={index} rgb={buttonLabels[index]} key={index}></ColorButton>)
      }
    }

    return buttonCollection;
  }

  return (
    <View>{makeButtonCollection()}</View>
  );
}

ButtonContainer.propTypes = {
  containerName: PropTypes.string.isRequired,
  buttonLabels: PropTypes.any.isRequired
};
