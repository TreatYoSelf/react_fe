import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Picker, TouchableOpacity } from 'react-native';

export default function TreatSelector({ id, title, selectCategory, style }) {
    // const { icon, title, rating: defaultRating } = mockTreat;
    const [rating, setRating] = useState(2);
    const iconName = title.toLowerCase();

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={() => selectCategory(`${title}`, id)}>
            {/* <Image source={require(`../../../assets/${iconName}.png`)} style={{ width: 200, height: 200 }} /> */}
            <Image source={require(`../../../assets/icons/categories/outdoors.png`)} style={{ width: 50, height: 50 }} />
            <Text style={styles.header}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        backgroundColor: "honeydew",
        borderWidth: 5,
        borderColor: '#003045'
    },
    header: {
        fontWeight: 'bold'
    },
    selected: {
        backgroundColor: "blue",
    }
});