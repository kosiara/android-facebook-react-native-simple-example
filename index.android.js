/**
 * Facebook React Android Native App Example
 *  https://github.com/kosiara/android-facebook-react-native-simple-example
 *
 * Framework:
 * https://github.com/facebook/react-native
 */
'use strict';

var { NativeModules } = require('react-native');
var React = require('react-native');
var SwitchAndroid = require('SwitchAndroid');
var Text = require('Text');
var Image = require('Image');
var ToastAndroid = require('ToastAndroid')
var UIExplorerPage = require('./UIExplorer/UIExplorerPage');
var UIExplorerBlock = require('./UIExplorer/UIExplorerBlock');


module.exports = NativeModules.ToastAndroid;
module.exports = UIExplorerPage;
module.exports = UIExplorerBlock;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableWithoutFeedback,
  DrawerLayoutAndroid,
  TouchableHighlight
} = React;

var AwesomeProject = React.createClass({

  render: function() {

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

                            <TouchableHighlight onPress={() => { ToastAndroid.show("Open drawer", ToastAndroid.SHORT);  this.refs.drawer.openDrawer() } } >
                                             <Image
                                                                    style={{width: 50, height: 50}}
                                                                    borderWidth="2"
                                                                    source={{uri: 'https://raw.githubusercontent.com/kosiara/android-facebook-react-native-simple-example/master/icons/ic_dehaze_black_36dp.png'}}
                                                                      />
                              </TouchableHighlight>

                               <Text style={styles.welcome}>
                                    Welcome to React Native!
                               </Text>

                                <Image
                                        style={{width: 100, height: 100}}
                                        borderWidth="2"
                                        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                                          />

                                <UIExplorerPage title="ToastAndroid" >
                                    <UIExplorerBlock title="Simple toast">
                                      <TouchableWithoutFeedback
                                        onPress={() =>
                                          ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT)}>
                                        <Text style={styles.text}>Click me.</Text>
                                      </TouchableWithoutFeedback>
                                    </UIExplorerBlock>
                                    <UIExplorerBlock title="Toast with long duration">
                                      <TouchableWithoutFeedback
                                        onPress={() =>
                                          ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)}>
                                        <Text style={styles.text}>Click me too.</Text>
                                      </TouchableWithoutFeedback>
                                    </UIExplorerBlock>
                                </UIExplorerPage>
                     </View>

        </DrawerLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        backgroundColor: '#4CAF50',
      },
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
