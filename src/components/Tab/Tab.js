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
import TabItem from "./TabItem";

class Tab extends React.Component {
    render() {
        return (
            <View name='Tab'
                  style={styles.row}>

                {this.props.tabs.map(tab => (
                    <TabItem text={tab.text}
                             style={styles.tabItem}
                             selected={tab.selected}
                             icon={tab.icon}
                             underline={tab.underline}
                    />
                ))}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 42,
        width: Dimensions.ScreenWidth,
        shadowColor: '#DDDDDD',
        shadowOffsetY: -1,
        shadowBlur: 4,
    },
    tabItem: {
        flex: 1,
    },

});
export default Tab;