import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import Profile from '../../components/Profile/Profile';
// import Landing from '../Landing/Landing';


export default function Login() {
    const [userDetails, setUserDetails] = useState({});
    const [signedIn, setSignIn] = useState(false);

    signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId:
                    "842486829242-mq0e6d5lpsql7l9u41o4cclaqprpsbjp.apps.googleusercontent.com",
                scopes: ["profile", "email", "https://www.googleapis.com/auth/calendar.events"]
            })

            if (result.type === "success") {
                setUserDetails(result)
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
                <Profile name={userDetails.user.name} photoUrl={userDetails.user.photoUrl} />
            ) : (
                <LoginPage signIn={this.signIn} />
                // <Landing signIn={this.signIn}/>
                )}
        </View>
    )
}

const LoginPage = props => {
    return (
        <View>
            <Image source={require("../../../assets/logo.png")} style={{ width: 200, height: 200 }} />
            <Text>An app where you can treat yourself to some personal time, guilt free.</Text>
            <Text style={styles.header}>Sign In With Google</Text>
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
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
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