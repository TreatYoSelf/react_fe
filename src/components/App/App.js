// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import Landing from './src/components/Landing/Landing';
// import Profile from './src/components/Profile/Profile';
import Login from '../../containers/Login/Login';
import { NativeRouter, Route } from "react-router-native";

import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import Landing from '../Landing/Landing';
import Profile from '../Profile/Profile';
import NavBar from '../NavBar/NavBar';
import NavBarItems from '../NavBar/NavBarItems';




export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        // <Route path="/" component={NavBar} />
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/profile" component={Profile} />  */}
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import Landing from './src/components/Landing/Landing';
// import Profile from './src/components/Profile/Profile';
// import Login from '../../containers/Login/Login';
// import { Route } from "react-router-native";
// import { NativeRouter } from "react-router-native";
//
// import React, { Component } from 'react';
// import { Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
// import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
// import { Icon } from 'native-base';
// import Landing from './src/components/Landing/Landing';
// import Profile from './src/components/Profile/Profile';
// import NavBar from './src/components/NavBar/NavBar';
// import NavBarItems from './src/components/NavBar/NavBarItems';
//
// export default function App() {
//   return (
//     <NativeRouter>
//       <View style={styles.container}>
//         <Route exact path="/" component={Login} />
//         {/* <Route exact path="/profile" component={Profile} />  */}
//       </View>
//     </NativeRouter>
//   );
// }
//
// // AppRegistry.registerComponent('MyApplication', () => App);
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
