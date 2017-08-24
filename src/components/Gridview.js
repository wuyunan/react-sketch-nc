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


import {Color, Dimensions} from "../common/index";
import TabbarItem from "./Tabbar/TabbarItem";

class Gridview extends React.Component {
    render() {
        return (
            <View name='TabbarItem'
                  style={styles.row}>

                {this.props.items.map(item => (

                    <View style={styles.item}>
                        <TabbarItem text={item.text}
                                    selected={item.selected}
                                    icon={item.icon}
                        /></View>
                ))}

            </View>)
    }
}


const styles = StyleSheet.create({
        row: {
            backgroundColor: Color.white,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.ScreenWidth,
            padding: 12,
            shadowColor: '#DDDDDD',
            shadowOffsetY: -1,
            shadowBlur: 4,
        },
        item: {
            width: ( Dimensions.ScreenWidth - 60 - 5 * 4) / 5,
            margin: 5,
        }
        ,

    })
;
export default Gridview;