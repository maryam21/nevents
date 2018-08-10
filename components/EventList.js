import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import EventCard from './EventCard';

export default class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('../db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({ events });
    }

    render() {
        return (
        <FlatList 
            data={this.state.events}
            renderItem={(({item}) => <EventCard event={item}/>)}
            keyExtractor={item => item.id}
        />
        );
    }
}