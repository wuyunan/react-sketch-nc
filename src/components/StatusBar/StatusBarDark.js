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


import Config from '../../config/index'
import Color from "../../common/color";


const IMG_ENDPOINT = `${Config.IMAGE_SERVER_URL}:${Config.IMAGE_SERVER_PORT}/`;

class StatusBarDark extends React.Component {
    render() {
        return (
            <View name='StatusBarWhite'
                  style={styles.row}>
                <View name='left' style={styles.left}>
                    <View name='sign' style={styles.sign}>
                        <View style={styles.dot}/>
                        <View style={styles.dot}/>
                        <View style={styles.dot}/>
                        <View style={styles.dot_empty}/>
                        <View style={styles.dot_empty}/>
                    </View>
                    <Text name='brand' style={styles.brand}>
                        NCTech
                    </Text>
                    <Image
                        name='wifi'
                        style={styles.wifi}
                        source={`${IMG_ENDPOINT}WiFi@2x.png`}
                    />
                </View>
                <Text name='time' style={styles.time}>
                    9:58 AM
                </Text>
                <View name='batteryArea' style={styles.batteryArea}>

                    <Image
                        name='battery'
                        style={styles.battery}
                        source={`${IMG_ENDPOINT}Battery@2x.png`}
                    />
                    <Text name='brand' style={styles.brand}>
                        100%
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.colorPrimary,
        width: 375,
        height: 20,
        flexDirection: 'row',
        alignContent: 'center',
        flex: 1,
        paddingLeft: 6.5,
        paddingRight: 12,
    },
    left: {
        flex: 1,
        flexDirection: 'row',
    },
    sign: {
        flexDirection: 'row',
        marginTop: 7,
        height: 6,
    },
    dot: {
        marginLeft: 3,
        alignContent: 'center',
        height: 5.5,
        width: 5.5,
        backgroundColor: Color.white,
        borderRadius: 4,
    },
    dot_empty: {
        marginLeft: 2,
        alignContent: 'center',
        height: 5.5,
        width: 5.5,
        backgroundColor: Color.colorPrimary,
        borderColor: Color.white,
        borderWidth: 0.5,
        borderRadius: 4,
    },
    brand: {
        marginLeft: 8,
        marginTop: 2,
        fontSize: 12,
        color: Color.white,
    },
    time: {
        flex: 1,
        marginLeft: 8,
        marginTop: 2,
        fontSize: 12,
        color: Color.white,
        alignItems: 'center',
        alignSelf: 'center',
    },
    wifi: {
        marginTop: 5,
        marginLeft: 8,
        resizeMode: 'contain',
        height: 9,
        width: 13,
    },
    batteryArea: {
        flex: 1,
        marginLeft: 8,
        flexDirection: 'row-reverse',
        alignContent: 'flex-end',
    },
    battery: {
        marginTop: 5,
        marginLeft: 4,
        resizeMode: 'contain',
        height: 10,
        width: 25,
    }
});
export default StatusBarDark;