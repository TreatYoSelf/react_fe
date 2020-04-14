import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Picker, TouchableOpacity } from 'react-native';

export default function SuggestedTreat({ title, selectCategory }) {
    // const { icon, title, rating: defaultRating } = mockTreat;
    const [rating, setRating] = useState(2);
    const iconName = title.toLowerCase();

    return (
        <TouchableOpacity style={styles.container} onPress={() => selectCategory(`${title}`)}>
            {/* <Image source={require(`../../../assets/${iconName}.png`)} style={{ width: 200, height: 200 }} /> */}
            <Image source={require(`../../../assets/icons/categories/outdoors.png`)} style={{ width: 50, height: 50 }} />
            <Text style={styles.header}>{title}</Text>
            {/* <Picker
                selectedValue={rating}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setRating(itemValue)}
            /> */}
        </TouchableOpacity>
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
    }
});