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


class SearchBar extends React.Component {
    render() {
        return (
            <View name='Title'
                  style={styles.row}>

                <View name='left1' style={styles.left}>
                    <Image name='searchIcon'
                           source={`${IMG_ENDPOINT}search@2x.png`}
                           style={styles.searchIcon}/>
                    <Text name='leftText'
                          style={styles.searchText}>
                        {this.props.searchText ? this.props.searchText : "搜索"}
                    </Text>
                </View>

            </View>)
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
        alignContent: 'center',
        justifyContent: 'center',
        // borderBottomColor: '#d7d7d7',
        // borderWidth: 0.5,


    },
    left: {
        marginTop: 8,
        flexDirection: 'row',
        height: 28,
        width: 336,
        fontFaceName: '',
        color: Color.white,
        backgroundColor: Color.white,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },

    searchIcon: {
        marginTop: 2,
        marginLeft: 10,
        alignSelf: 'center',
        height: 15,
        width: 15,
        resizeMode: 'contain',
    },
    searchText: {
        marginTop: 2,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        color: Color.text_import9,
        fontSize: 14,
        fontFamily: "PingFang SC",

    },

});
export default SearchBar;