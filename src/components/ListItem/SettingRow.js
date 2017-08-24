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

class SettingRow extends React.Component {
    render() {
        return (
            <View name='Settingrow'
                  style={styles.row}>
                <Image name='icon'
                       source={this.props.icon}
                       style={styles.icon}/>
                <Text name='title'
                      style={styles.text}>
                    {this.props.subtitle}
                </Text>
            </View>)
    }

}

const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        width: Dimensions.ScreenWidth,
        height: 44,
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: Color.divider_secondary,
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