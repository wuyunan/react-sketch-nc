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
import {Image, View, Text, StyleSheet} from 'react-primitives';


import Color from "../../common/color";
import Tag from "./Tag";

const TagFlow = ({tags}) =>
    <View name='tag'
          style={styles.tagFlow}>

        {tags.map(tag => (
            <Tag text={tag.text}
                 selected={tag.selected}

            />
        ))}

    </View>;


const styles = StyleSheet.create({
    tagFlow: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignContent: 'flex-start',
        width: 375,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: '#DDDDDD',
        shadowOffsetY: -1,
        shadowBlur: 4,
        flexWrap:'wrap',
        padding:10,
    },
    tag: {
        flex: 1,
    },

});
export default TagFlow;