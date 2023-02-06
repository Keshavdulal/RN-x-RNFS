import React, {useState} from 'react';
import * as RNFS from 'react-native-fs';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import ButtonText from './src/ButtonText';
import AppText from './src/AppText';

const App = () => {
  const [content, setContent] = useState(null);
  const writeFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.writeFile(path, 'This is a content from Waldo', 'utf8')
      .then(() => console.log('FILE WRITTEN!'))
      .catch(err => console.log(err.message));
  };
  const readFile = () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath)
      .then(result => {
        console.log('GOT RESULT', result);
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then(statResult => {
        if (statResult[0].isFile()) {
          return RNFS.readFile(statResult[1], 'utf8');
        }
        return 'no file';
      })
      .then(contents => {
        setContent(contents);
        console.log(contents);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };
  const deleteFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    return RNFS.unlink(path)
      .then(() => {
        console.log('FILE DELETED');
        setContent(null);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={writeFile} style={styles.buttonStyle}>
          <ButtonText name="WRITE" />
        </TouchableOpacity>
        <TouchableOpacity onPress={readFile} style={styles.buttonStyle}>
          <ButtonText name="READ" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteFile} style={styles.buttonStyle}>
          <ButtonText name="DELETE" />
        </TouchableOpacity>
        <AppText>{content}</AppText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#98DBC6',
  },
  buttonStyle: {
    backgroundColor: '#F18D9E',
    padding: 10,
    marginTop: 32,
    minWidth: 250,
    borderRadius: 5,
  },
});
export default App;
