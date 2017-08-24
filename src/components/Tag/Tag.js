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
import {StyleSheet, Text} from 'react-primitives';


import {Color} from "../../common/index";

class Tag extends React.Component {
    render() {
        return (

            <Text name={this.props.text}
                  style={this.props.selected ? styles.textSelected : styles.text}>
                {this.props.text}
            </Text>
        )
    }
}

const styles = StyleSheet.create({


    text: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: Color.white,
        borderColor: Color.text_import9,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 4.5,
        marginLeft: 5,
        marginRight: 5,
        color: Color.text_import9,
        fontSize: 13,
    },
    textSelected: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: Color.white,
        borderColor: Color.colorPrimary,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 4.5,
        marginLeft: 5,
        marginRight: 5,
        color: Color.colorPrimary,
        fontSize: 13,
    }
});
export default Tag;