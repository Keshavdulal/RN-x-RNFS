import {StyleSheet, Text} from 'react-native';
import React from 'react';
const ButtonText = ({name}) => {
  return <Text style={styles.buttonTextStyle}>{name}</Text>;
};
const styles = StyleSheet.create({
  buttonTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default ButtonText;
