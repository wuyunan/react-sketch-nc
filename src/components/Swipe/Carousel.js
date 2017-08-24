/**
 * components/Row.js
 * Define your component using platform-independent primitives
 */
import React from 'react';

import {Image, StyleSheet, View} from 'react-primitives';


import {Color, Dimensions} from "../../common/index";
import CircleIndicator from "./CircleIndicator";

class Carousel extends React.Component {
    render() {
        return (
            <View name='Swipe'
                  style={styles.row}>
                <Image
                    name='item'
                    source={this.props.images}
                    style={styles.item}/>

                <View name='Swipe'
                      style={styles.indicator}>
                    <CircleIndicator/>
                </View>
            </View>)
    }
}


const styles = StyleSheet.create({
        row: {
            backgroundColor: Color.white,
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.ScreenWidth,
            paddingLeft: 12,
            paddingRight: 12,
        },

        item: {
            width: Dimensions.ScreenWidth - 24,
            resizeMode: 'contain',
            height: (Dimensions.ScreenWidth - 24 ) * 0.75,
        },
        indicator: {},


    })
;
export default Carousel;