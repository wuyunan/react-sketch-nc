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
import { Image, View, Text, StyleSheet } from 'react-primitives';


import Color from "../../common/color";
import TabItem from "./TabItem";

const Tab = ({tabbars}) =>
    <View name='TabbarItem'
          style={styles.row}>

        {tabbars.map(tabbar => (
            <TabItem text={tabbar.text}
                        style={styles.tabbarItem}
                        selected={tabbar.selected}
                        icon={tabbar.icon}
            />
        ))}

    </View>;


const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: 375,
        paddingLeft: 30,
        paddingRight: 30,
        shadowColor: '#DDDDDD',
        shadowOffsetY: -1,
        shadowBlur: 4,

    },
    tabbarItem: {
        flex: 1,
    },

});
export default Tab;