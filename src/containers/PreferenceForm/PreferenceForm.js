import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import TreatSelector from '../../containers/TreatSelector/TreatSelector';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-native";

export const FETCH_CATEGORIES = gql`
    {
      getCategories {
        name
      }
    }
  `;

export default function PreferenceForm() {
    let catDisplay, allCategories = [];
    let selectedCategories = {};
    const [selectedStatus, setSelectionStatus] = useState(false);

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
    const postPreferences = (chosenCat) => {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(chosenCat)
        }

        // fetch('https://treat-yo-self-bjtw.herokuapp.com/api/v1/suggestions', options)
        //     .then(resp => resp.json())
        //     .then(data => console.log('preferences posted'))
        //     .catch(err => console.log(err))
    }

    const selectCategory = (category, id) => {
        if (allCategories[id].isSelect) {
            allCategories[id].isSelect = false;
            delete selectedCategories[id];
        } else if (Object.keys(selectedCategories).length < 3) {
            selectedCategories[id] = category;
            allCategories[id].isSelect = true;
            if (Object.keys(selectedCategories).length === 3) {
                setSelectionStatus(true)
            }
        }
    }

    const submitSelection = () => {
            console.log('hit')
            // postPreferences(Object.keys(selectedCategories))
            //navigate back to profile also 
        //if failed submit error message
    }

    if (data) {
        allCategories = data.getCategories.map((category, index) => {
            return {
                id: index.toString(),
                isSelect: false,
                ...category
            }
        })

        catDisplay = <FlatList
            data={allCategories}
            renderItem={({ item }) => (
                <TreatSelector key={item.id} id={item.id} title={item.name} style={item.isSelect ? 'selected' : ''} selectCategory={selectCategory} />
            )}
        />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>What types of activities are you interested in?</Text>
            {catDisplay}
            {selectedStatus && <TouchableOpacity style={styles.button} onPress={() => submitSelection()} disabled={selectedStatus ? false : true}>
                <Text>Submit Choices</Text>
            </TouchableOpacity>}
            <Link to="/profile" style={styles.button}>
                <Text>Profile</Text>
            </Link>
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
    categories: {
        backgroundColor: "#fff",
        flexGrow: 0,
        // height: 60
        // width: 100
    },
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 300,
        padding: 10,
        backgroundColor: "honeydew",
        borderWidth: 5,
    }
})
