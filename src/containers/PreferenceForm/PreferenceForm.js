import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import TreatSelector from '../../containers/TreatSelector/TreatSelector';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export const FETCH_CATEGORIES = gql`
    {
      getCategories {
        name
      }
    }
  `;

export default function PreferenceForm({setPreference}) {
    let catDisplay, allCategories = [];
    let selectedCategories = {};

    const { error, data } = useQuery(FETCH_CATEGORIES, { errorPolicy: 'all' });
    //need to error display
    // if (error) {
    //     setErrors(error)
    // }

    //this needs to be refactored to a toggle.
    //store as object for easy removal 

    //create toggle as two separate tasks. 
    //one should go through and as long as 

    //fix up naming convention here 
    const selectCategory = (category, id) => {
        if (allCategories[id].isSelect) {
            allCategories[id].isSelect = false;
            delete selectedCategories[id];
        } else if (Object.keys(selectedCategories).length < 3) {
            selectedCategories[id] = category;
            allCategories[id].isSelect = true;
        }
    }

    const submitSelection = () => {
        if (selectedCategories.length === 3) {
            setPreference(Object.keys(selectedCategories))
            //navigate back to profile also 
        }
        //if failed submit error message
    }

    if (data) {
        allCategories = data.getCategories.map((category, index) => {
            return {
                id: index,
                isSelect: false,
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
            <Text style={styles.header}>What activities you're interested in?</Text>
            {catDisplay}
            <TouchableOpacity style={styles.container} onPress={() => submitSelection()}>
                <Text style={styles.header}>Submit</Text>
            </TouchableOpacity>
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
