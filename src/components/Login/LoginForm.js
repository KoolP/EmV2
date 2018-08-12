import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends Component {

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle="dark-content"
      />
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="#808080"
          underlineColorAndroid="#3AD7FF"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#808080"
          underlineColorAndroid="#3AD7FF"
          secureTextEntry
          returnKeyType="go"
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#808080"
  },
  buttonContainer: {
    backgroundColor: 'rgba(58,215,255,0.9)',
    paddingVertical: 14
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700'
  }
});
