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

class Row extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <Text>{this.props.subtitle}</Text>
            </View>
        );
    }
}

export default Row;