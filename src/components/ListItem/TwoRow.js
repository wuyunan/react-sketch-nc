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


class TwoRow extends React.Component {
    render() {
        return (
            <View name='TwoRow'
                  style={styles.row}>
                <Image name='icon'
                       source={this.props.icon}
                       style={styles.icon}/>
                <View style={styles.right}>
                    <Text name='title'
                          style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Text name='subtitle'
                          style={styles.subTitle}>
                        {this.props.subtitle}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        width: 375,
        height: 60,
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: Color.divider_secondary,
        borderWidth: 0.5,
    },
    icon: {
        marginTop: 12,
        marginRight: 12,
        height: 36,
        width: 36,
        alignItems: 'center',
        resizeMode: 'contain',
    },
    title: {
        marginTop: 2,
        fontSize: 16,
        color: Color.text_black,
        fontFamily: "PingFang SC",
    },
    subTitle: {
        fontSize: 13,
        color: Color.text_import9,
        fontFamily: "PingFang SC",
    },
    right: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    }

});
export default TwoRow;