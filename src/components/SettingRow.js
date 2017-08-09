/**
 * components/Row.js
 * Define your component using platform-independent primitives
 */
import React from 'react';

import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-sketchapp';


const SettingRow = props =>
    <View style={styles.row}>
        <Image source={props.icon} style={styles.avatar}/>
        <Text>{props.subtitle}</Text>
    </View>


const styles = StyleSheet.create({
    row: {
        backgroundColor: '#F9FDFF',
        width: 375,
        height: 44,
    },
    avatar: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
    },

});
export default SettingRow;