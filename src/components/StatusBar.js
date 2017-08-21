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


import {IMAGE_SERVER_URL, IMAGE_SERVER_PORT} from '../config'
import Color from "../common/color";



const IMG_ENDPOINT = `${IMAGE_SERVER_URL}:${IMAGE_SERVER_PORT}/`

const StatusBarWhite = props =>
    <View name='StatusBarWhite'
          style={styles.row}>

        <View
            name='sign'
            style={styles.sign}>
            <View style={styles.dot}>

            </View>
            <View style={styles.dot}>

            </View>
            <View style={styles.dot}>

            </View>
            <View style={styles.dot_empty}>

            </View>
            <View style={styles.dot_empty}>

            </View>

        </View>
        <Text name='brand'
              style={styles.brand}>
            NC
        </Text>
        <Image
            name='wifi'
            style={styles.wifi}
            source={`${IMG_ENDPOINT}Wi-Fi@2x.png`}
        />

    </View>


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
        backgroundColor: '#ffffff',
        borderRadius: 4,
    },
    dot_empty: {
        marginLeft: 2,
        alignContent: 'center',
        height: 5.5,
        width: 5.5,
        backgroundColor: '#1b82d2',
        borderColor: '#ffffff',
        borderWidth: 0.5,
        borderRadius: 4,
    },
    brand: {
        marginLeft: 8,
        marginTop:2,
        fontSize: 12,
        color: '#ffffff',
    },
    wifi: {
        marginTop: 5,
        marginLeft: 8,
        resizeMode: 'contain',
        height: 9,
        width: 13,
    }
});
export default StatusBarWhite;