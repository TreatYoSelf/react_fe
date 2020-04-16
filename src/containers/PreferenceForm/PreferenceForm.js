import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import TreatSelector from '../../containers/TreatSelector/TreatSelector';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-native";
import { fetchData } from "../../helpers/fetch";

export const FETCH_CATEGORIES = gql`
    {
      getCategories {
        name
      }
    }
  `;

export default function PreferenceForm() {
    let catDisplay, allCategories = [];
    const [selectedStatus, setSelectionStatus] = useState(false);
    const [selectedCategories, setCategories] = useState({});

    const { data } = useQuery(FETCH_CATEGORIES, { errorPolicy: 'all' });
    const postPreferences = (chosenCat) => {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(chosenCat)
        }

        fetchData('https://treat-yo-self-bjtw.herokuapp.com/api/v1/suggestions', options)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const selectCategory = (category, id) => {
        if (allCategories[id].isSelect) {
            allCategories[id].isSelect = false;
            delete selectedCategories[category];
            setCategories(selectedCategories)
        } else if (Object.keys(selectedCategories).length < 3) {
            selectedCategories[category] = category;
            setCategories(selectedCategories)
            allCategories[id].isSelect = true;
            if (Object.keys(selectedCategories).length === 3) {
                setSelectionStatus(true)
            }
        }
    }

    const submitSelection = () => {
        postPreferences(Object.keys(selectedCategories))
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
