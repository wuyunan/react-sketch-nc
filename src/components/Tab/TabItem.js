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
import {StyleSheet, Text, View} from 'react-primitives';


import Color from "../../common/color";


const TabItem = props =>
    <View name='TabItem'
          style={props.selected && props.underline ? styles.rowSelected : styles.row}>
        <Text name='text' style={props.selected ? styles.textSelected : styles.text}>
            {props.text}
        </Text>

    </View>


const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        flexDirection: 'column',
        justifyContent: 'center',
        height: 42,
        marginLeft: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    rowSelected: {
        backgroundColor: Color.white,
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomColor: Color.colorPrimary,
        borderWidth: 2,
        height: 42,
        paddingLeft: 15,
        paddingRight: 15

    },

    text: {
        color: Color.text_import9,
        fontSize: 15,
    },
    textSelected: {
        color: Color.colorPrimary,
        fontSize: 15,
    }
});
export default TabItem;