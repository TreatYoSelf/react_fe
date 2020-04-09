import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Landing from './src/components/Landing/Landing';
// import Profile from './src/components/Profile/Profile';
import Login from '../../containers/Login/Login';
import { NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
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
