import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Picker } from 'react-native';
import { mockTreat } from '../../mockData/mockTreat';

export default function SuggestedTreat() {
    const { icon, title, rating: defaultRating } = mockTreat;
    const [rating, setRating] = useState(defaultRating);

    // console.log(icon)
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 200 }} />
            <Text>{title}</Text>
            <Picker
                selectedValue={rating}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setRating(itemValue)}
            />
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