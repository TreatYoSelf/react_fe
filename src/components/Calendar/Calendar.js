import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import TreatEvent from './TreatEvent';
import { mockEvents } from '../../mockData/mockTreat';

export default function Calendar() {
    const [calendar, setCal] = useState(mockEvents);
    const [calReturned, fetchCal] = useState(false);

    useEffect(() => {
        // fetchEvents();
    }, [])

    const fetchEvents = () => {
        fetch('https://treat-yo-self-bjtw.herokuapp.com/api/v1/users/events')
            .then(resp => resp.json())
            .then(data => {
                console.log('calData', data)
                if (!calReturned) {
                    setCal(data)
                    fetchCal(true)
                }
            })
            .catch(err => console.log(err))
    }

    const calendarEvents = calendar.reduce((eventByDay, event) => {
        let {eventName, eventStartTime, eventEndTime} = event;
        eventStartTime = new Date(parseFloat(eventStartTime));
        eventEndTime = new Date(parseFloat(eventEndTime));
        const duration = Math.floor((eventEndTime.getTime() - eventStartTime.getTime()) / 60000);
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

    const eventsByDay = Object.keys(calendarEvents).map((event, index) => {
        return {
            id: index,
            title: event,
            data: calendarEvents[event]
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Treats This Week</Text>
            <SectionList
                sections={eventsByDay}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <TreatEvent title={item.eventName} duration={item.duration}/>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.day}>{title}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        alignItems: "center",
        justifyContent: "space-around"
        // flexDirection: "column"
        // height: "100%",
        // width: 100
    },
    header: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#003045'
    },
    day: {
        fontSize: 25,
        marginTop: 30
    },
    categories: {
        backgroundColor: "#fff",
        flexGrow: 0,
        // height: 60
        // width: 100
    }
})
