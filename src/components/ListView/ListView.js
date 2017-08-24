import React from 'react';
import {StyleSheet, View} from 'react-primitives';


import {Color, Dimensions} from "../../common/index";

/**
 * ListView
 */
class ListView extends React.Component {
    /**
     * 渲染ItemView
     * @param item
     * @param index
     * @param array
     * @private
     */
    _renderItem(item, index, array) {
        let itemView =
            <View
                name="item"
                key={index}
                style={styles.row}>
                {this.props.renderItem(item)}
            </View>;

        if (index !== array.length - 1
            && this.props.renderSpace !== undefined) {

            itemView =
                <View
                    name="item"
                    key={index}
                    style={styles.row}>
                    {this.props.renderItem(item)}
                    {this.props.renderSpace()}
                </View>
            //
        }
        return itemView
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <View name='ListView'
                  style={styles.row}>
                {
                    this.props.items.map((item, index, array) =>
                        this._renderItem(item, index, array)
                    )

                }

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
        },
    })
;
export default ListView;