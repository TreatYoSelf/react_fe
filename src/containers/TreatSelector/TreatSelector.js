import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import * as All from '../../helpers/assets';

export default function TreatSelector({ id, title, selectCategory, style }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={() => selectCategory(`${title}`, id)}>
            <Image source={All[`${title.toLowerCase()}`]} style={{ width: 50, height: 50 }} />
            <Text style={styles.header}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#e6f7ff",
        borderWidth: 3,
        borderColor: '#003045'
    },
    header: {
        fontWeight: 'bold'
    },
    selected: {
        backgroundColor: "blue",
    }
});