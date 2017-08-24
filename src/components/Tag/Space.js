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

class Space extends React.Component {
    render() {
        return (
            <View name='Space' style={styles.space}/>)
    }
}


const styles = StyleSheet.create({
    space: {
        backgroundColor: Color.background_native,
        width: Dimensions.ScreenWidth,
        height: 5,
    },


});
export default Space;