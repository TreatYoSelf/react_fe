import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import SuggestedTreat from '../../containers/suggestedTreat/SuggestedTreat';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default function Profile(props) {
    //need to fetch all activities for a user, and map over them adding suggesteTreats for each
    //temporarily load SuggestedTreat
    let catDisplay, selectedCategories = [];
    const myQuery = gql`
        {
          getCategories {
            name
          }
        }
      `;

    const { error, data } = useQuery(myQuery, { errorPolicy: 'all' });
    //need to error display
    // if (error) {
    //     setErrors(error)
    // }

    //this needs to be refactored to a toggle.
    //store as object for easy removal 
    const selectCategory = (category) => {
        if (selectedCategories.length < 3) {
            selectedCategories.push(category)
        }
    }

    const submitSelection = () => {
        if (selectedCategories.length === 3) {
            console.log(selectedCategories)
        }
    }

    //render fetched categories
    if (data) {
        catDisplay = data.getCategories.map((category, i) =>
            <SuggestedTreat key={i} title={category.name} selectCategory={selectCategory} />)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
            <ScrollView style={styles.categories}>
                {catDisplay}
            </ScrollView>
            {/* <FlatList
                data={data.getCategories}
                ref={e => (this.items = e)}
                renderItem={({ category, i }) => (
                    <SuggestedTreat key={i} title={category.name} selectCategory={selectCategory} />
                )}
            /> */}
            <TouchableOpacity style={styles.container} onPress={() => submitSelection()}>
                <Text style={styles.header}>Submit</Text>
            </TouchableOpacity>
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
