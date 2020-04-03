import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Landing() {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 200 }} />
            <Text>An app where you can treat yourself to some personal time, guilt free.</Text>
        </View>
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

// export default Landing;