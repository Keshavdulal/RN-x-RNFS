import {StyleSheet, Text} from 'react-native';
import React from 'react';
const AppText = ({children}) => (
  <Text style={styles.textStyle}>{children}</Text>
);
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
export default AppText;
