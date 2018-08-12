import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import { Button } from 'react-native-elements';
import LoginV2 from './src/components/Login/LoginV2';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          {/*<Login/>*/}
          <LoginV2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});
