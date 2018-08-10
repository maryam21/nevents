import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatDate } from '../api';

export default function EventCard({ event }) {
    return (
        <View>
            <View>
                <Text>{formatDate(event.date)}</Text>
                <Text>{event.title}</Text>
            </View>
        </View>
    );
}
