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

export default class VideoRow extends React.Component {
    render() {
        return (
            <View name='MultiMediaRow'
                  style={styles.row}>

                <Image name='image'
                       source={this.props.image}
                       style={styles.image}/>

                <Image name='play'
                       source={`${IMG_ENDPOINT}play.png`}
                       style={styles.play}/>

                <Text name='title'
                      style={styles.title}>
                    {this.props.title ? this.props.title : "这是一个标题"}
                </Text>

                <View style={styles.bottom}>
                    <Image name='icon'
                           source={this.props.icon}
                           style={styles.icon}/>
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

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#F9FDFF',
        width: Dimensions.ScreenWidth,
        flexDirection: 'column',

    },
    item: {
        marginTop: 8,
        width: Dimensions.ScreenWidth - 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom: {
        justifyContent: 'flex-start',
        alignContent: "flex-start",
        alignItems: 'center',
        paddingVertical: 8,
        width: Dimensions.ScreenWidth,
        flexDirection: 'row',
    },
    image: {
        height: Dimensions.ScreenWidth * 7 / 16,
        width: Dimensions.ScreenWidth,
        resizeMode: 'stretch',
    },
    icon: {
        height: 24,
        width: 24,
        marginHorizontal: 8,
        resizeMode: 'stretch',
        borderRadius: 12
    },
    play: {
        position: 'absolute',
        top: (Dimensions.ScreenWidth * 7 / 16) / 2 - 18,
        left: Dimensions.ScreenWidth / 2 - 18,
        height: 36,
        width: 36,
        resizeMode: 'stretch',
    },
    title: {
        position: 'absolute',
        top: 0,
        marginTop: 12,
        marginHorizontal: 12,
        alignContent: 'flex-start',
        fontSize: 15,
        color: Color.white,
        fontFamily: "PingFang SC",
        fontWeight: 'bold',
        maxHeight: 50,
        lineHeight: 22,
    },
    from: {
        alignContent: 'flex-start',
        fontSize: 12,
        color: Color.text_import9,
        fontFamily: "PingFang SC",
    },
    comment: {
        alignContent: 'flex-start',
        fontSize: 12,
        marginLeft: 5,
        color: Color.text_import9,
        fontFamily: "PingFang SC",
    },
    time: {
        marginLeft: 5,
        alignContent: 'flex-start',
        fontSize: 12,
        color: Color.text_import9,
        fontFamily: "PingFang SC",
    }
});
