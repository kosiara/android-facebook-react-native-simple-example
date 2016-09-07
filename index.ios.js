/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableHighlight,
  DrawerLayoutAndroid
} from 'react-native';

class AwesomeProject extends Component {
  render() {

    return (

        <View>
              <Image
                    style={{width: 150, height: 150}}
                    borderWidth={2}
                    marginTop={70}
                    marginLeft={10}
                    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                      />

              <View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to React Native!
                </Text>

                <Text
                    style={{borderWidth: 1, borderColor: '#000000'}}
                    onPress={() =>
                      AlertIOS.alert('This is a toast', 'This is a toast')}>
                    Click me
                </Text>

                <Text
                    onPress={() =>
                        AlertIOS.alert('This is a toast', 'This is a toast')}>
                    Click me too.
                </Text>
              </View>

          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
