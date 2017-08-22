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

import Color from "../../common/color";


const TitleBarLight = props =>
    <View name='Title'
          style={styles.row}>

        <View name='left' style={styles.left}>
            <Image name='backButton'
                   source={props.backIcon}
                   style={styles.back}/>
            <Text name='leftText'
                  style={styles.leftText}>{props.leftText}</Text></View>

        <Text name='title'
              style={styles.title}>{props.title}</Text>

        <View name='right' style={styles.right}>
            <Text name='rightMenu'
                  style={styles.rightText}>{props.rightText}</Text>
        </View>
    </View>


const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        width: 375,
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
        color: Color.colorPrimary,


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
        color: Color.colorPrimary,
        fontSize: 16,


    },
    title: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        color: Color.text_black,
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
        color: Color.colorPrimary,
        fontSize: 16,

    }
});
export default TitleBarLight;