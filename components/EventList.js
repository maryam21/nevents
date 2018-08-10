import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('../db.json').events;
        this.setState({ events });
    }

    render() {
        return (
        <FlatList 
            data={this.state.events}
            renderItem={(({item}) => <Text>{item.title}</Text>)}
            keyExtractor={item => item.id}
        />
        );
    }
}