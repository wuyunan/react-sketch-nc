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

import {Color, Dimensions} from "../../common/index";
import Config from "../../config/index";

const IMG_ENDPOINT = `${Config.IMAGE_SERVER_URL}:${Config.IMAGE_SERVER_PORT}/`;


class SearchBarWithCancel extends React.Component {
    render() {
        return (
            <View name='Title'
                  style={styles.row}>

                <View name='left' style={styles.left}>
                    <View name='left1' style={styles.left1}>
                        <Image name='searchIcon'
                               source={`${IMG_ENDPOINT}search@2x.png`}
                               style={styles.searchIcon}/>
                        <Text name='leftText'
                              style={styles.searchText}>
                            {this.props.searchText}
                        </Text>
                    </View>
                    <Image name='cancelIcon'
                           source={`${IMG_ENDPOINT}cancel@2x.png`}
                           style={styles.cancelIcon}/>
                </View>

                <View name='right' style={styles.right}>
                    <Text name='rightMenu'
                          style={styles.rightText}>
                        取消
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.background_native,
        width: Dimensions.ScreenWidth,
        height: 44,
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: '#d7d7d7',
        borderWidth: 0.5,


    },
    left: {
        marginTop: 8,
        flexDirection: 'row',
        height: 28,
        width: 304,
        fontFaceName: '',
        color: Color.white,
        backgroundColor: Color.white,
        borderRadius: 8,

    },
    left1: {
        flexDirection: 'row',
        height: 28,
        width: 275,
    },
    searchIcon: {
        marginTop: 2,
        marginLeft: 10,
        alignSelf: 'center',
        height: 15,
        width: 15,
        resizeMode: 'contain',
    },
    cancelIcon: {
        marginTop: 2,
        alignSelf: 'center',
        height: 18,
        width: 18,
        resizeMode: 'contain',
    },

    searchText: {
        marginTop: 2,
        alignContent: 'center',
        marginLeft: 8,
        color: Color.text_import9,
        fontSize: 16,
        fontFamily: "PingFang SC",

    },

    right: {
        flex: 1,
        flexDirection: 'row-reverse',
        height: 44,
    },
    rightText: {

        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: Color.colorPrimary,
        fontSize: 16,

    }
});
export default SearchBarWithCancel;