import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import TreatSelector from '../../containers/TreatSelector/TreatSelector';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default function Profile(props) {
    let catDisplay, selectableCategories = [];
    let selectedCategories = {};
    const fetchCategories = gql`
        {
          getCategories {
            name
          }
        }
      `;

    const { error, data } = useQuery(fetchCategories, { errorPolicy: 'all' });
    //need to error display
    // if (error) {
    //     setErrors(error)
    // }

    //this needs to be refactored to a toggle.
    //store as object for easy removal 

    //create toggle as two separate tasks. 
        //one should go through and as long as 
    const selectCategory = (category, id) => {
        console.log('selectedCat', category)
        console.log('selectedID', id)
        if (selectableCategories[id].isSelect) {
            selectableCategories[id].isSelect = false;
            delete selectedCategories[id];
        } else if (Object.keys(selectedCategories).length < 3) {
            selectedCategories[id] = category;   
            selectableCategories[id].isSelect = true;
        }
        console.log(selectableCategories)
    }

    const submitSelection = () => {
        if (selectedCategories.length === 3) {
            const fetchCategories = gql`
            {
                getCategories {
                    name
                }
            }
            `;
        }
    }

    //add a selected property to each data item before passing through to flatList
    //make selectCategory toggle that selected boolean
    //conditionally style each treat based on that to say if selected or not
    //use that check to remove from selected array if true and clicked

    //we'll need to store in state to do the flatlist re-render
    //otherwise 

    if (data) {
        selectableCategories = data.getCategories.map((category, index) => {
            return {
                id: index,
                isSelect:false,
                ...category
            }
        })

        catDisplay = <FlatList
            data={selectableCategories}
            renderItem={({ item }) => (
                <TreatSelector key={item.id} id={item.id} title={item.name} style={item.isSelect ? 'selected' : ''} selectCategory={selectCategory} />
            )}
        />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome:{props.name}</Text>
            <Image style={styles.image} source={{ uri: props.photoUrl }} />
            {catDisplay}
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
