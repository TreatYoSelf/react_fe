import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TreatEvent({ title, duration, time }) {
    return (
        <View>
            <Text style={styles.header}>{parseInt(time) < 12 ? `${time} AM` : `${time % 12} PM`}</Text>
            <View style={styles.container}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.header}>{`${duration} Mins`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        backgroundColor: "#e6f7ff",
        borderWidth: 5,
        borderColor: '#003045',
        margin: 10
    },
    header: {
        fontWeight: 'bold',
        color: '#003045'
    },
    selected: {
        backgroundColor: "blue",
    }
});