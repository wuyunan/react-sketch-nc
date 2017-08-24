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
import TabbarItem from "./TabbarItem";

class Tabbar extends React.Component {
    render() {
        return (
            <View name='TabbarItem'
                  style={styles.row}>

                {this.props.tabbars.map(tabbar => (
                    <TabbarItem text={tabbar.text}
                                style={styles.tabbarItem}
                                selected={tabbar.selected}
                                icon={tabbar.icon}
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