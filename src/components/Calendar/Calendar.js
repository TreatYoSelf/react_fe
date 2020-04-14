import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import TreatEvent from './TreatEvent';
// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';
import { mockEvents } from '../../mockData/mockTreat';

export default function Calendar() {
    //do calcs here to group into a single date object 
    const calendarEvents = mockEvents.reduce((eventByDay, event) => {
        let {eventName, eventStartTime, eventEndTime} = event;
        eventStartTime = new Date(eventStartTime);
        eventEndTime = new Date(eventEndTime);
        const duration = eventEndTime.getTime() - eventStartTime.getTime();
        const eventTime = eventStartTime.getHours();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const eventDay = days[eventStartTime.getDay()];
        const eventData = {
            eventName,
            duration,
            eventTime
        }

        if (!eventByDay[eventDay]) {
            eventByDay[eventDay] = [eventData]  
        } else {
            eventByDay[eventDay].push(eventData)
        }

        return eventByDay;
    }, {})

    //do a map here if object.key has values, create a section obj with ID, title and array that contains all values for that key
    const eventsByDay = Object.keys(calendarEvents).map((event, index) => {
        return {
            id: index,
            title: event,
            data: calendarEvents[event]
        }
    })

    //store events by weekday
    //create a sectionList for those events with the section being the day if available
    //use above to create section list 
    //http://www.reactnativeexpress.com/sectionlist


    //add border bottom to text for hrule 
    //map over events

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Treats This Week</Text>
            <SectionList
                sections={eventsByDay}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <TreatEvent title={item.eventName} duration={item.duration}/>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
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
