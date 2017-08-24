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
import TabbarItem from "./TabBarItem";

class Tabbar extends React.Component {
    render() {
        return (
            <View name='TabbarItem'
                  style={styles.row}>

                {this.props.tabbars.map((item, index) => (
                    <TabbarItem text={item.text}
                                style={styles.tabbarItem}
                                selected={item.selected}
                                icon={item.icon}
                                key={index}
                    />
                ))}

            </View>)
    }
}


const styles = StyleSheet.create({
    row: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: Dimensions.ScreenWidth,
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
export default Tabbar;