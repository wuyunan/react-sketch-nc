/**
 * sketch-entry.js
 * same setup as other examples
 */
import React from 'react';
import {render, Artboard, StyleSheet, View} from 'react-sketchapp';
import SettingRow from './components/SettingRow';
import {StatusBarLight, StatusBarDark} from "./components/StatusBar/index";
import {TitleBarDark, TitleBarLight, TitleBarSearch} from "./components/Navigation/index";
import Config from "./config/index";

const IMG_ENDPOINT = `${Config.IMAGE_SERVER_URL}:${Config.IMAGE_SERVER_PORT}/`;

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

const Demo1 = props => (
        <Artboard>
            <StatusBarLight/>
            <TitleBarLight backIcon={`${IMG_ENDPOINT}previous@2x.png`}
                           title="标题"
                           rightText="保存"
                           leftText="上一个"/>

        </Artboard>
    )
;
const Demo2 = props => (
        <Artboard>
            <StatusBarDark/>
            <TitleBarDark backIcon={`${IMG_ENDPOINT}back@2x.png`}
                          title="标题"
                          rightText="编辑"
                          leftText="上一个"/>

        </Artboard>
    )
;
const Demo3 = props => (
        <Artboard>
            <StatusBarDark/>
            <TitleBarSearch backIcon={`${IMG_ENDPOINT}back@2x.png`}
                            searchText="搜索店铺内容"
            />

        </Artboard>
    )
;
export default (context) => {
    let xml = <Demo3/>;
    render(xml, context.document.currentPage());

}


