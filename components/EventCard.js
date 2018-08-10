import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatDate } from '../api';
import PropTypes from 'prop-types';

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

EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    })
}