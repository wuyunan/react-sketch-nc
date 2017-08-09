/**
 * components/Row.js
 * Define your component using platform-independent primitives
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-primitives';

const Row = props =>
    <View>
        <Text>{props.title}</Text>
        <Text>{props.subtitle}</Text>
    </View>

export default Row;