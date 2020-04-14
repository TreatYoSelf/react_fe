import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Picker } from 'react-native';

export default function TreatEvent({ title, duration }) {
    return (
        <View style={[styles.container]} onPress={() => selectCategory(`${title}`, id)}>
            {/* <Image source={require(`../../../assets/${iconName}.png`)} style={{ width: 200, height: 200 }} /> */}
            <Image source={require(`../../../assets/icons/categories/outdoors.png`)} style={{ width: 50, height: 50 }} />
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.header}>{`${duration} HR`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        backgroundColor: "honeydew",
        borderWidth: 5,
    },
    header: {
        fontWeight: 'bold'
    },
    selected: {
        backgroundColor: "blue",
    }
});