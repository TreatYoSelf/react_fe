import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Landing from './src/components/Landing/Landing';
// import Profile from './src/components/Profile/Profile';
import Login from '../../containers/Login/Login';
import { Route } from "react-router-native";
import { NativeRouter } from "react-router-native";
import Calendar from '../Calendar/Calendar';
import Profile from '../Profile/Profile';
import PreferenceForm from '../../containers/PreferenceForm/PreferenceForm';

export default function App() {  
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} /> 
        <Route exact path="/calendar" component={Calendar} /> 
      </View>
    </NativeRouter>
  );
}

// AppRegistry.registerComponent('MyApplication', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6bfac',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    height: "100%",
    },
});
