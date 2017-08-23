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


import Color from "../../common/color";


const TabItem = props =>
    <View name='TabbarItem'
          style={styles.row}>


        <Text name='text' style={props.selected ? styles.textSelected : styles.text}>
            {props.text}
        </Text>
        <View
            name='icon'
            style={styles.icon}
        />
    </View>


const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        resizeMode: 'contain',
        height: 22,
        width: 22,
    },

    text: {
        marginTop: 4.5,
        color: Color.text_import9,
        fontSize: 10,
    },
    textSelected: {
        marginTop: 4.5,
        color: Color.colorPrimary,
        fontSize: 10,
    }
});
export default TabItem;