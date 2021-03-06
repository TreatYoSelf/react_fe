import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import { Link } from "react-router-native";
import { fetchData } from "../../helpers/fetch";

export default function Profile() {
    const [user, setUser] = useState({ name: '', photoUrl: '' });
    const [userReturned, fetchUser] = useState(false);

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('user');
            const parsedUser = await JSON.parse(storedUser)
            if(!userReturned) {
                setUser(parsedUser.user)
                fetchUser(true)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const generateEvents = () => {
        fetchData('https://treat-yo-self-bjtw.herokuapp.com/api/v1/suggestions')
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }

    return (
        <View style={styles.wrapper}>
            {user.name ? (
                <View style={styles.container}>
                    <Text style={styles.header}>Welcome {user.givenName}!</Text>
                    <Image style={styles.image} source={{ uri: user.photoUrl }} />
                    <Link to="/preferenceform" style={styles.button} >
                        <Text>Update Preferences</Text>
                    </Link>
                    <Link to="/calendar" style={styles.button} >   
                        <Text>View Calendar</Text>
                    </Link>
                    <TouchableOpacity style={styles.button} onPress={() => generateEvents()}>
                        <Text>Treat Yo Self!</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <ActivityIndicator />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        borderColor: "#003045",
        borderWidth: 1,
        padding: 20,
        width: "80%",
        height: "80%",
        alignSelf: "center",
        borderRadius: 30
    },
    container: {
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "100%",
    },
    header: {
        fontSize: 30,
        color: '#003045'
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    },
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        backgroundColor: "honeydew",
        borderWidth: 3,
        borderColor: '#003045',
    }
})
