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

class ThreeImageRow extends React.Component {
    render() {
        return (
            <View name='Settingrow'
                  style={styles.row}>
                <Text name='title'
                      style={styles.title}>
                    {this.props.title}
                </Text>
                <View style={styles.item}>


                    {this.props.images.slice(0, 3).map(item => (

                        <Image name='icon'
                               source={item.icon}
                               style={styles.icon}/>

                    ))}
                </View>
            </View>)
    }

}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#F9FDFF',
        width: Dimensions.ScreenWidth,
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: '#ebebeb',
        borderWidth: 0.5,
    },
    item: {
        width: Dimensions.ScreenWidth - 24,
        flexDirection: 'row',
        flex: 1,

    },
    icon: {
        marginTop: 10,
        height: (Dimensions.ScreenWidth - 24) / 3,
        width: (Dimensions.ScreenWidth - 24) / 3,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 12,
        alignContent: 'flex-start',
        fontSize: 15,
        color: Color.text_black,
        line: 2,
        fontFamily: "PingFang SC",
    }

});
export default ThreeImageRow;