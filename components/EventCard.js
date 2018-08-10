import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatDate, getCountdownParts } from '../api';
import PropTypes from 'prop-types';

export default function EventCard({ event }) {
    const {
        days,
        hours,
        minutes,
        seconds,
    } = getCountdownParts(event.date);

    return (
        <View>
            <View>
                <Text>{formatDate(event.date)}</Text>
                <Text>{event.title}</Text>
            </View>
            <View>
                <Text>{days}</Text>
                <Text>{hours}</Text>
                <Text>{minutes}</Text>
                <Text>{seconds}</Text>
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