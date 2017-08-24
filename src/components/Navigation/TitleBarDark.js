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

class TitleBarDark extends React.Component {
    render() {
        return (
            <View name='Title'
                  style={styles.row}>

                <View name='left' style={styles.left}>
                    <Image name='backButton'
                           source={this.props.backIcon}
                           style={styles.back}/>
                    <Text name='leftText'
                          style={styles.leftText}>{this.props.leftText}</Text></View>

                <Text name='title'
                      style={styles.title}>{this.props.title}</Text>

                <View name='right' style={styles.right}>
                    <Text name='rightMenu'
                          style={styles.rightText}>{this.props.rightText}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.colorPrimary,
        width: Dimensions.ScreenWidth,
        height: 44,
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: '#d7d7d7',
        borderWidth: 0.5
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        height: 44,
        fontFaceName: '',

    },
    back: {
        marginTop: 2,
        alignSelf: 'center',
        height: 15,
        width: 8,
        resizeMode: 'contain',
    },

    leftText: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 44,
        marginLeft: 4,
        color: Color.white,
        fontSize: 16,


    },
    title: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        color: Color.white,
        fontSize: 18,
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
        color: Color.white,
        fontSize: 16,

    }
});
export default TitleBarDark;