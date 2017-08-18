/**
 * sketch-entry.js
 * same setup as other examples
 */
import React from 'react';
import {render, Artboard, StyleSheet, View} from 'react-sketchapp';
import SettingRow from './components/SettingRow';
import StatusBarWhite from "./components/StatusBar";


const styles = StyleSheet.create({
    artboard: {
        width: 375,
        minHeight: 667,
    }
});

const SettingVew = props => (

        <Artboard name='Setting'
                  style={styles.artboard}
        >
            <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                        subtitle="sub1"/>
            <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                        subtitle="sub"/>
            <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                        subtitle="sub"/>
            <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                        subtitle="sub"/>
            <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                        subtitle="sub"/>
        </Artboard>

    )
;

const StatusBar = props => (

        <StatusBarWhite />

    )
;
export default (context) => {
    let xml = <StatusBar/>;
    render(xml, context.document.currentPage());

}


