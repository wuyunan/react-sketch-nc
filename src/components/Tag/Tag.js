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
import {Image, View, Text, StyleSheet} from 'react-primitives';


import Color from "../../common/color";


const Tag = props =>

    <Text name={props.text}
          style={props.selected ? styles.textSelected : styles.text}>
        {props.text}
    </Text>


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