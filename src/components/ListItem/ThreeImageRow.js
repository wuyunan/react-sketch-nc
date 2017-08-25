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
            <View name='ThreeImageRow'
                  style={styles.row}>
                <Text name='title'
                      style={styles.title}>
                    {this.props.title ? this.props.title : "这是一个标题"}
                </Text>
                <View style={styles.item}>
                    {this.props.images
                        .slice(0, 3)
                        .map((item, index) => (

                            <Image name='icon'
                                   key={index}
                                   source={item.icon}
                                   style={styles.image}/>
                        ))}
                </View>
                <View style={styles.bottom}>
                    <Text name='from'
                          style={styles.from}>
                        {this.props.from ? this.props.from : '作者名称'}
                    </Text>
                    <Text name='comment'
                          style={styles.comment}>
                        {this.props.comment ? this.props.comment : 0}评论
                    </Text>
                    <Text name='time'
                          style={styles.time}>
                        {this.props.time ? this.props.time : '刚刚'}
                    </Text>
                </View>
            </View>)
    }

}

const imageWidth = (Dimensions.ScreenWidth - 30) / 3;
const styles = StyleSheet.create({
    row: {
        backgroundColor: '#F9FDFF',
        width: Dimensions.ScreenWidth,
        flexDirection: 'column',
        paddingLeft: 12,
        paddingRight: 12,
    },
    item: {
        marginTop: 8,
        width: Dimensions.ScreenWidth - 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom: {
        marginTop: 8,
        width: Dimensions.ScreenWidth,
        flexDirection: 'row',
    },
    image: {
        height: imageWidth * 9 / 16,
        width: imageWidth,
        resizeMode: 'stretch',
    },
    title: {
        marginTop: 12,
        alignContent: 'flex-start',
        fontSize: 15,
        color: Color.text_black,
        fontFamily: "PingFang SC",
        maxHeight: 50,
        lineHeight: 22,
    },
    from: {
        alignContent: 'flex-start',
        fontSize: 13,
        color: Color.text_import9,
        fontFamily: "PingFang SC",
    },
    comment: {
        alignContent: 'flex-start',
        fontSize: 13,
        marginLeft: 5,
        color: Color.text_import9,
        fontFamily: "PingFang SC",
    }, time: {
        marginLeft: 5,
        alignContent: 'flex-start',
        fontSize: 13,
        color: Color.text_import9,
        fontFamily: "PingFang SC",
    }
});
export default ThreeImageRow;