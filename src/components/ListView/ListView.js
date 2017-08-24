import React from 'react';
// import {
//     Image,
//     View,
//     Text,
//     StyleSheet
// } from 'react-sketchapp';
import {Text} from 'react-primitives';

class Welcome extends React.Component {
    render() {
        return <Text>Hello, {this.props.name}</Text>;
    }
}

export default Welcome;