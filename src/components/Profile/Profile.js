import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import PreferenceForm from '../../containers/PreferenceForm/PreferenceForm';

export default function Profile(props) {
    const [preferences, setPreference] = useState([]);

    //need a button that redirects to PreferenceForm
    //pass through state to set preference on submit
    //on submit of preference reroutes to profile
    //dynamically display button based on preference 
    //make graphQL post here 

    const postPreferences = () => {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(preferences)
        }

        fetch('https://treat-yo-self-bjtw.herokuapp.com/api/v1/suggestions ', options)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome {props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
            {preferences.length ? (
                <Button />
            ) : (
                <PreferenceForm setPreference={setPreference} />
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // justifyContent: "space-between",
        // height: 40,
        // width: 100
    },
    header: {
        fontSize: 25,
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    },
    categories: {
        backgroundColor: "#fff",
        flexGrow: 0,
        // height: 60
        // width: 100
    }
})
