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
import TabbarItem from "../Tabbar/TabbarItem";
import CircleIndicator from "./CircleIndicator";

class Swipe extends React.Component {
    render() {
        return (
            <View name='Swipe'
                  style={styles.row}>
                <View name='item'
                      style={styles.row}>
                    {this.props.items.slice(0, 10).map(item => (

                        <View style={styles.item}>
                            <TabbarItem text={item.text}
                                        selected={item.selected}
                                        icon={item.icon}
                            /></View>
                    ))}
                </View>
                <CircleIndicator/>
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
            paddingLeft: 12,
            paddingRight: 12,
        },
        row2: {
            backgroundColor: Color.white,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.ScreenWidth,
            height: 16,
            marginTop: 2,

        },
        item: {
            width: ( Dimensions.ScreenWidth - 60 - 5 * 4) / 5,
            marginTop: 10,
            marginRight: 5,
            marginLeft: 5,

        },
        dot: {
            marginLeft: 3,
            alignContent: 'center',
            height: 5.5,
            width: 5.5,
            backgroundColor: Color.text_black,
            borderRadius: 4,
        },
        dot_empty: {
            marginLeft: 2,
            alignContent: 'center',
            height: 5.5,
            width: 5.5,
            backgroundColor: Color.white,
            borderColor: Color.text_black,
            borderWidth: 0.5,
            borderRadius: 4,
        },

    })
;
export default Swipe;