import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import TreatEvent from './TreatEvent';
import { mockEvents } from '../../mockData/mockTreat';
import { Link } from "react-router-native";
import { fetchData } from "../../helpers/fetch";

export default function Calendar() {
    const [calendar, setCal] = useState(mockEvents);
    const [calReturned, fetchCal] = useState(false);

    useEffect(() => {
        fetchEvents();
    }, [])

    const fetchEvents = () => {
        fetchData('https://treat-yo-self-bjtw.herokuapp.com/api/v1/users/events')
            .then(resp => resp.json())
            .then(data => {
                if (!calReturned) {
                    setCal(data.events)
                    fetchCal(true)
                }
            })
            .catch(err => console.log(err))
    }

    const calendarEvents = calendar.reduce((eventByDay, event) => {
        let { event_name, event_start_time, event_end_time} = event;
        eventStartTime = new Date(parseFloat(event_start_time));
        eventEndTime = new Date(parseFloat(event_end_time));
        const duration = Math.floor((eventEndTime.getTime() - eventStartTime.getTime()) / 60000);
        const eventTime = eventStartTime.getHours();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const eventDay = days[eventStartTime.getDay()];
        const eventData = {
            event: event_name,
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
                renderItem={({ item }) => <TreatEvent title={item.event} duration={item.duration} time={item.eventTime}/>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.day}>{title}</Text>
                )}
            />
            <Link to="/profile" style={styles.button} >
                <Text>Profile</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-around"
    },
    header: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#003045'
    },
    day: {
        fontSize: 25,
        marginTop: 30,
        color: '#003045'
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
        borderColor: '#003045',
    }
})
