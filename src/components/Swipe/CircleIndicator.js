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
import {StyleSheet, View} from 'react-primitives';


import {Color, Dimensions} from "../../common/index";

class CircleIndicator extends React.Component {
    render() {
        return (
            <View name='in' style={styles.row2}>
                <View style={styles.dot_empty}/>
                <View style={styles.dot}/>
                <View style={styles.dot}/>
                <View style={styles.dot}/>
                <View style={styles.dot}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
        row: {
            backgroundColor: Color.white,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.ScreenWidth,
            paddingLeft: 12,
            paddingRight: 12,
        },
        row2: {
            backgroundColor: Color.white,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.ScreenWidth,
            height: 16,
            marginTop: 2,

        },

        dot: {
            marginLeft: 3,
            alignContent: 'center',
            height: 4,
            width: 4,
            backgroundColor: Color.text_import9,
            borderRadius: 2,
        },
        dot_empty: {
            marginLeft: 3,
            alignContent: 'center',
            height: 4,
            width: 4,
            backgroundColor: Color.text_red,
            borderRadius: 2,
        },

    })
;
export default CircleIndicator;