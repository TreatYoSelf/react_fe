import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, FlatList } from 'react-native';
import SuggestedTreat from '../../containers/suggestedTreat/SuggestedTreat';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default function Profile(props) {
    //need to fetch all activities for a user, and map over them adding suggesteTreats for each
    //temporarily load SuggestedTreat
    let catDisplay = [];
    const myQuery = gql`
        {
          getCategories {
            name
          }
        }
      `;

    const { error, data } = useQuery(myQuery, { errorPolicy: 'all' });
    // if (error) {
    //     setErrors(error)
    // }
    if (data) {
        catDisplay = data.getCategories.map((category, i) =>
        <SuggestedTreat key={i} title={category.name} />)
    }
    //need to error display
  
    // console.log('hit', categories)


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
            <ScrollView style={styles.categories}>
                {catDisplay}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
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
