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


import Color from "../../common/color";
import TabItem from "./TabItem";

const Tab = ({tabs}) =>
    <View name='Tab'
          style={styles.row}>

        {tabs.map(tab => (
            <TabItem text={tab.text}
                     style={styles.tabItem}
                     selected={tab.selected}
                     icon={tab.icon}
                     underline={tab.underline}
            />
        ))}

    </View>;


const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 42,
        width: 375,
        shadowColor: '#DDDDDD',
        shadowOffsetY: -1,
        shadowBlur: 4,
    },
    tabItem: {
        flex: 1,
    },

});
export default Tab;