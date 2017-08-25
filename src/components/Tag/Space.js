/**
 * components/Row.js
 * Define your component using platform-independent primitives
 */
import React from 'react';
import {StyleSheet, View} from 'react-primitives';
import {Color, Dimensions} from "../../common/index";

export default class Space extends React.Component {
    render() {
        return (
            <View name='Space'
                  style={styles.space}/>)
    }
}


const styles = StyleSheet.create({
    space: {
        backgroundColor: Color.background_native,
        width: Dimensions.ScreenWidth,
        height: 6,
    },
});
