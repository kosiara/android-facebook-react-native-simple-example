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
  DrawerLayoutAndroid
} from 'react-native';

class AwesomeProject extends Component {
  render() {

    var navigationView = (
      <View style={styles.sideMenu}>
                 <Image style={{width: 40, height: 40}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                 <Text style={{margin: 10, fontSize: 18, textAlign: 'left'}}
                           onPress={() =>   this.refs.drawer.closeDrawer() }>First option</Text>
                 <Text style={{margin: 10, fontSize: 18, textAlign: 'left'}}
                            onPress={() =>   this.refs.drawer.closeDrawer() }>Second option</Text>
                 <Text style={{margin: 10, fontSize: 18, textAlign: 'left'}}
                            onPress={() =>   this.refs.drawer.closeDrawer() }>Third option</Text>
        </View>
    );

    return (

      <DrawerLayoutAndroid
                            ref="drawer"
                            drawerWidth={230}
                            drawerPosition={DrawerLayoutAndroid.positions.Left}
                            renderNavigationView={() => navigationView}>

          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
          </View>

      </DrawerLayoutAndroid>
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
