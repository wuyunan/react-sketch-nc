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

export default class TitleImageRow extends React.Component {
    render() {
        return (
            <View name='MultiMediaRow'
                  style={styles.row}>

                <View style={styles.left}>
                    <Text name='title'
                          style={styles.title}>
                        {this.props.title ? this.props.title : "这是一个标题这是一个标题这是一个标题"}
                    </Text>

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
                </View>
                <Image name='image'
                       source={this.props.image}
                       style={styles.image}/>
            </View>)
    }

}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#F9FDFF',
        width: Dimensions.ScreenWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"

    },
    left: {
        paddingHorizontal: 12,
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        height: ( Dimensions.ScreenWidth / 3 - 24 ) * 0.66,
        width: Dimensions.ScreenWidth / 3 - 24,
        resizeMode: 'stretch',
        margin: 12,
    },
    icon: {
        height: 24,
        width: 24,
        marginHorizontal: 8,
        resizeMode: 'stretch',
        borderRadius: 12
    },

    title: {
        marginTop: 12,
        alignContent: 'flex-start',
        fontSize: 15,
        color: Color.text_black,
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
