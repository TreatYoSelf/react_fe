import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import Profile from '../../components/Profile/Profile';
import PreferenceForm from '../PreferenceForm/PreferenceForm';
import { mockUser } from '../../mockData/mockTreat';
mockUser

export default function Login() {
    const [signedIn, setSignIn] = useState(true);

    const registerUser = ({user: {givenName, familyName, email}, accessToken, refreshToken}) => {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                first_name: givenName,
                last_name: familyName,
                email,
                google_token: accessToken,
                google_refresh_token: refreshToken
            })
        }   

        // fetch('https://treat-yo-self-bjtw.herokuapp.com/api/v1/users', options)
        //     .then(resp => resp.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
    }

    const saveUserDetails = async details => {
        try {
            const userToStore = await JSON.stringify(details)
            await AsyncStorage.setItem('user', mockUser);
        } catch (error) {
            console.log(error.message);
        }
    };

    const signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId:
                    "842486829242-mq0e6d5lpsql7l9u41o4cclaqprpsbjp.apps.googleusercontent.com",
                scopes: ["profile", "email", "https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/calendar"]
            })

            if (result.type === "success") {
                registerUser(result)
                saveUserDetails(result)
                setSignIn(true)
            } else {
                console.log("Login Cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    }

    return (
        <View style={styles.container}>
            {signedIn ? (
                <PreferenceForm />
            ) : (
                <LoginPage signIn={signIn} />
                // <Landing signIn={this.signIn}/>
                )}
        </View>
    )
}

const LoginPage = props => {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 200 }} />
            <Text style={styles.header}>Treat Yo Self</Text>
            <Text>An app where you can treat yourself to some personal time, guilt free.</Text>
            <Button title="Sign in with Google" onPress={() => props.signIn()} />
        </View>
    )
}

// const LoggedInPage = props => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Welcome:{props.name}</Text>
//             <Image style={styles.image} source={{ uri: props.photoUrl }} />
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        margin: 50,
        width: 300
    },
    header: {
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