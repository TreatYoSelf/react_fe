import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default function Landing(props) {
    return (
        <View>
            <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 200 }} />
            <Text>An app where you can treat yourself to some personal time, guilt free.</Text>
            <Text style={styles.header}>Sign In With Google</Text>
            <Button title="Sign in with Google" onPress={() => props.signIn()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        fontSize: 25
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    }
})
// export default Landing;