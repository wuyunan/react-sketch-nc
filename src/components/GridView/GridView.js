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

class GridView extends React.Component {
    render() {
        return (
            <View name='GridView'
                  style={styles.row}>

                {this.props.items.map((item, index) => (

                    <View style={styles.item}
                          key={index}>

                        {
                            this.props.renderItem(item)
                        }

                    </View>
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
            width: Dimensions.ScreenWidth,
            paddingLeft: 7,
            paddingRight: 7,
            paddingTop: 2,
            paddingBottom: 12,
            shadowColor: '#DDDDDD',
            shadowOffsetY: -1,
            shadowBlur: 4,
        },
        item: {
            width: ( Dimensions.ScreenWidth - 24 - 10 * 4) / 4,
            marginTop: 10,
            marginLeft: 5,
            marginRight: 5,

        }
        ,

    })
;
export default GridView;