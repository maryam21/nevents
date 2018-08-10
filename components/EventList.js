import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class EventList extends React.Component {
    render() {
        return (
        <FlatList 
            data={[{name: 'first'}, {name: 'second'}]}
            renderItem={(({item}) => <Text>{item.name}</Text>)}
        />
        );
    }
}