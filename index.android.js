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
  ToastAndroid,
  TouchableHighlight,
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

        <TouchableHighlight
                 style={{   position: 'absolute', top: 5, left: 5  }}
                 onPress={() => { ToastAndroid.show("Open drawer", ToastAndroid.SHORT);  this.refs.drawer.openDrawer() } } >
                     <Image
                     style={[ styles.base, styles.background, {
                            width: 50, height: 50, borderWidth: 1, borderColor: '#ff000000'}]}
                            source={{uri: 'https://raw.githubusercontent.com/kosiara/android-facebook-react-native-simple-example/master/icons/ic_dehaze_black_36dp.png'}}
                              />
          </TouchableHighlight>

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
