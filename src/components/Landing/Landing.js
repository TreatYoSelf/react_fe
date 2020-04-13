import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default function Landing(props) {
    return (
        <View style={styles.view}>
            <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 200 }} />
            <Text style={styles.header}>An app where you can treat yourself to some personal time, guilt free.</Text>
            <Button title="Sign in with Google" onPress={() => props.signIn()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b6bfac",
        alignItems: "center",
        justifyContent: "center"
    },
    view: {
      display: 'flex',
      alignItems: 'center'
    },
    header: {
      fontFamily: "Noteworthy",
      fontWeight: "bold",
      fontSize: 25
    },
    image: {
        align: "center",
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    }
})
// export default Landing;
