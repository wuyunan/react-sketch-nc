/**
 * components/Row.js
 * Define your component using platform-independent primitives
 */
import React from 'react';
// import {
//     Image,
//     View,
//     Text,
//     StyleSheet
// } from 'react-sketchapp';
import {Text, View} from 'react-primitives';

const Row = props =>
    <View>
        <Text>{props.title}</Text>
        <Text>{props.subtitle}</Text>
    </View>

export default Row;