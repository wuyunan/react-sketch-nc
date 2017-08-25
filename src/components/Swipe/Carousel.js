/**
 * components/Row.js
 * Define your component using platform-independent primitives
 */
import React from 'react';

import {Image, StyleSheet, View} from 'react-primitives';


import {Color, Dimensions} from "../../common/index";
import CircleIndicator from "./CircleIndicator";

var imageHeight = (Dimensions.ScreenWidth) * 4.5 / 16;

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        imageHeight = this.props.small ? (Dimensions.ScreenWidth) * 4.5 / 16 : (Dimensions.ScreenWidth) * 9 / 16
    }

    render() {
        return (
            <View name='Carousel'
                  style={styles.row}>
                <Image
                    name='image'
                    source={this.props.images}
                    style={this.props.small ? styles.itemSmall : styles.item}/>

                <View name='indicator'
                      style={styles.indicator}>
                    <CircleIndicator/>
                </View>
            </View>)
    }
}

const styles = StyleSheet.create({
        row: {
            backgroundColor: Color.white,
            width: Dimensions.ScreenWidth,
        },

        item: {
            marginTop: 0,
            width: Dimensions.ScreenWidth,
            resizeMode: 'stretch',
            height: imageHeight,
        },
    itemSmall: {
        marginTop: 0,
        width: Dimensions.ScreenWidth,
        resizeMode: 'stretch',
        height: imageHeight,
        },
    indicator: {
        position: 'absolute',
        top: imageHeight - 20
    },


    })
;
export default Carousel;