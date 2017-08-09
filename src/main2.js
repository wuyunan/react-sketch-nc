/**
 * sketch-entry.js
 * same setup as other examples
 */
import React from 'react';
import {render, Artboard, StyleSheet, View} from 'react-sketchapp';
import SettingRow from './components/SettingRow';


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
                    subtitle="sub"/>
        <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                    subtitle="sub"/>
        <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                    subtitle="sub"/>
        <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                    subtitle="sub"/>
        <SettingRow icon="http://cdn-img.easyicon.net/png/11829/1182910.gif"
                    subtitle="sub"/>
    </Artboard>
);


export default (context) => {
    let xml = <SettingVew/>;
    render(xml, context.document.addBlankPage());
    render(xml, context.document.addBlankPage());

}


