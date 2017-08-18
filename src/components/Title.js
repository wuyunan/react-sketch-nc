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


const Title = props =>
    <View name='Settingrow'
          style={styles.row}>
        <Image name='icon'
               source={props.icon}
               style={styles.avatar}/>
        <View style={styles.title}>
            <Text name='title'
                  style={styles.text}>{props.subtitle}</Text>
        </View>
    </View>


const styles = StyleSheet.create({
    row: {
        backgroundColor: '#F9FDFF',
        width: 375,
        height: 44,
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: '#d7d7d7',
        borderWidth: 0.5
    },
    avatar: {
        height: 24,
        width: 24,
        marginTop: 12,
        resizeMode: 'contain',
    },
    text: {
        marginLeft: 12,
        alignContent: 'center',
        height: 44,
        fontSize: 16,

    }
    , title: {
        marginLeft: 12,
        alignContent: 'center',
        height: 44,

    }
});
export default Title;