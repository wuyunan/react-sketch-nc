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
import TabbarItem from "../Tabbar/TabBarItem";
import CircleIndicator from "./CircleIndicator";

class Swipe extends React.Component {
    render() {
        return (
            <View name='Swipe'
                  style={styles.row}>
                <View name='item'
                      style={styles.row}>
                    {this.props.items.slice(0, 10).map((item, index) => (

                        <View style={styles.item}
                              key={index}>
                            <TabbarItem text={item.text}
                                        selected={item.selected}
                                        icon={item.icon}
                            />
                        </View>
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

        item: {
            width: ( Dimensions.ScreenWidth - 24 - 5 * 4) / 5,
            marginTop: 10,

        },


    })
;
export default Swipe;