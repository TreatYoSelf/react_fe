import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import SuggestedTreat from '../../containers/suggestedTreat/SuggestedTreat';

export default function Profile(props) {
    //need to fetch all activities for a user, and map over them adding suggesteTreats for each
    //temporarily load SuggestedTreat

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
            <SuggestedTreat />
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
    header: {
      fontFamily: "Noteworthy",
      fontWeight: "normal",
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
