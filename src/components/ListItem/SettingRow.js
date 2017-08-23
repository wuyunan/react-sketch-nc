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
import {Image, StyleSheet, Text, View} from 'react-primitives';
import Color from "../../common/color";


const SettingRow = props =>
    <View name='Settingrow'
          style={styles.row}>
        <Image name='icon'
               source={props.icon}
               style={styles.icon}/>
        <Text name='title'
              style={styles.text}>
            {props.subtitle}
        </Text>
    </View>


const styles = StyleSheet.create({
    row: {
        backgroundColor: '#F9FDFF',
        width: 375,
        height: 44,
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: '#ebebeb',
        borderWidth: 0.5,
    },
    icon: {
        marginTop: 10,
        height: 24,
        width: 24,
        alignItems: 'center',
        resizeMode: 'contain',
    },
    text: {
        marginTop: 2,
        marginLeft: 12,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 44,
        fontSize: 15,
        color: Color.text_black,
        fontFamily: "PingFang SC",
    }

});
export default SettingRow;