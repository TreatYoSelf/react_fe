import React from 'react';
import { StyleSheet, View } from 'react-native';
import Landing from './src/components/Landing/Landing';
import Profile from './src/components/Profile/Profile';
// import { NativeRouter, Route } from "react-router-native";


export default function App() {
  return (
    // <NativeRouter>
      <View style={styles.container}>
        <Landing />
      </View>
    // </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6bfac',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Baskerville"
    },
    titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
