/**
 * sketch-entry.js
 * same setup as other examples
 */
import React from 'react';
import {Artboard, render, StyleSheet, View,} from 'react-sketchapp';
import SettingRow from './components/ListItem/SettingRow';
import {StatusBarDark} from "./components/StatusBar/index";
import {SearchBarWithCancel, TitleBarDark} from "./components/Navigation/index";
import Config from "./config/index";
import Tabbar from "./components/Tabbar/Tabbar";
import Tab from "./components/Tab/Tab";
import TagFlow from "./components/Tag/TagFlow";
import TwoRow from "./components/ListItem/TwoRow";
import SearchBar from "./components/Navigation/SearchBar";
import Swipe from "./components/Swipe/Swipe";
import Dimensions from "./common/dimensions";
import Space from "./components/Tag/Space";
import ThreeImageRow from "./components/ListItem/ThreeImageRow";

const IMG_ENDPOINT = `${Config.IMAGE_SERVER_URL}:${Config.IMAGE_SERVER_PORT}/`;

const styles = StyleSheet.create({
    artboard: {
        width: Dimensions.ScreenWidth,
        minHeight: 667,
    },
    settingList: {
        flexDirection: 'column'
    }
});


const SettingData = [
    {
        text: '支付宝支付宝支付宝支付宝支付宝',
        icon: `${IMG_ENDPOINT}alipay@2x.png`,
        selected: true,
    },
    {
        text: '口碑口碑口碑口碑口碑',
        icon: `${IMG_ENDPOINT}koubei@2x.png`,
        selected: false,
    },
    {
        text: '朋友口碑口碑口碑口碑',
        icon: `${IMG_ENDPOINT}friend@2x.png`,
        selected: false,
    },
    {
        text: '我的我的我的我的我的我的我的我的',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    }, {
        text: '支付宝支付宝支付宝支付宝支付宝',
        icon: `${IMG_ENDPOINT}alipay@2x.png`,
        selected: true,
    },
    {
        text: '口碑口碑口碑口碑口碑',
        icon: `${IMG_ENDPOINT}koubei@2x.png`,
        selected: false,
    },
    {
        text: '朋友口碑口碑口碑口碑',
        icon: `${IMG_ENDPOINT}friend@2x.png`,
        selected: false,
    },
    {
        text: '我的我的我的我的我的我的我的我的',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    }, {
        text: '支付宝支付宝支付宝支付宝支付宝',
        icon: `${IMG_ENDPOINT}alipay@2x.png`,
        selected: true,
    },
    {
        text: '口碑口碑口碑口碑口碑',
        icon: `${IMG_ENDPOINT}koubei@2x.png`,
        selected: false,
    },
    {
        text: '朋友口碑口碑口碑口碑',
        icon: `${IMG_ENDPOINT}friend@2x.png`,
        selected: false,
    },
    {
        text: '我的我的我的我的我的我的我的我的',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    },
];

const SettingList = props => (
    <View style={styles.settingList}>
        {SettingData.map(data => (
            <SettingRow icon={data.icon}
                        subtitle={data.text}/>
        ))}

    </View>
);


const DATA = [
    {
        text: '支付宝',
        icon: `${IMG_ENDPOINT}alipay@2x.png`,
        selected: true,
    },
    {
        text: '口碑',
        icon: `${IMG_ENDPOINT}koubei@2x.png`,
        selected: false,
    },
    {
        text: '朋友',
        icon: `${IMG_ENDPOINT}friend@2x.png`,
        selected: false,
    },
    {
        text: '我的',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    },
];


const Tags = [
    {
        text: '支付宝',
        icon: `${IMG_ENDPOINT}alipay@2x.png`,
        selected: true,
    },
    {
        text: '口碑',
        icon: `${IMG_ENDPOINT}koubei@2x.png`,
        selected: false,
    },
    {
        text: '朋友',
        icon: `${IMG_ENDPOINT}friend@2x.png`,
        selected: false,
    },
    {
        text: '我的',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    }, {
        text: '支付宝',
        icon: `${IMG_ENDPOINT}alipay@2x.png`,
        selected: true,
    },
    {
        text: '口碑口碑',
        icon: `${IMG_ENDPOINT}koubei@2x.png`,
        selected: false,
    },
    {
        text: '朋友',
        icon: `${IMG_ENDPOINT}friend@2x.png`,
        selected: false,
    },
    {
        text: '我的',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    }, {
        text: '支付宝宝',
        icon: `${IMG_ENDPOINT}alipay@2x.png`,
        selected: true,
    },
    {
        text: '口碑口碑口',
        icon: `${IMG_ENDPOINT}koubei@2x.png`,
        selected: false,
    },
    {
        text: '朋友',
        icon: `${IMG_ENDPOINT}friend@2x.png`,
        selected: false,
    },
    {
        text: '我的我',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    },
];

const IMAGES = [
    {
        text: '支付宝',
        icon: `${IMG_ENDPOINT}image1.jpg`,
        selected: true,
    },
    {
        text: '口碑',
        icon: `${IMG_ENDPOINT}image2.jpg`,
        selected: false,
    },
    {
        text: '朋友',
        icon: `${IMG_ENDPOINT}image3.jpg`,
        selected: false,
    },
    {
        text: '我的',
        icon: `${IMG_ENDPOINT}money@2x.png`,
        selected: false,
    },
];
const Demo5 = props => (
    <Artboard name='自动生成'>
            <StatusBarDark/>
            <TitleBarDark backIcon={`${IMG_ENDPOINT}back@2x.png`}
                          title="标题"
                          rightText="编辑"
                          leftText="上一个"/>
        <SearchBar/>
        <Tab tabs={DATA}/>
        <Space/>

            <TagFlow tags={Tags}/>
        <Space/>

        <Swipe items={Tags}/>
        <Space/>

        <TwoRow icon={`${IMG_ENDPOINT}money@2x.png`}
                title='主标题主标题'
                subtitle='副标题副标题'/>
        <Space/>
        <ThreeImageRow
            title="区块在挖矿过程中产生，所谓的挖矿就是区块在挖矿过程中产生，所谓的挖矿就是区块在挖矿过程中产生，所谓的挖矿就是"
            images={IMAGES}
            from="悟空问答"
            comment="2"
            time="刚刚"
        />
        <Space/>

            <SettingList/>

            <Tabbar tabbars={DATA}/>
        </Artboard>
    )
;
const Demo6 = props => (
        <Artboard>
            <StatusBarDark/>
            <SearchBarWithCancel searchText="搜索店铺内容"
            />
            <Tab tabbars={DATA} underline={true}/>

        </Artboard>
    )
;

export default (context) => {


    let xml = <Demo5/>;
    render(xml, context.document.currentPage());

}


