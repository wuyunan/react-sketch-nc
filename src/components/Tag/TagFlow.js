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
import {StyleSheet, View} from 'react-primitives';


import {Color, Dimensions} from "../../common/index";
import Tag from "./Tag";

class TagFlow extends React.Component {
    render() {
        return (
            <View name='TagFlow'
                  style={styles.tagFlow}>

                {this.props.tags.map((item, index) => (
                    <Tag text={item.text}
                         key={index}
                         selected={item.selected}

                    />
                ))}

            </View>)
    }
}


const styles = StyleSheet.create({
    tagFlow: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignContent: 'flex-start',
        width: Dimensions.ScreenWidth,
        padding: 12,
        shadowColor: '#c3c3c3',
        shadowOffsetY: -1,
        shadowBlur: 4,
        flexWrap: 'wrap',

    },
    tag: {
        flex: 1,
    },

});
export default TagFlow;