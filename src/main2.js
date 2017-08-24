/**
 * sketch-entry.js
 * same setup as other examples
 */
import React from 'react';
import {Artboard, render, StyleSheet,} from 'react-sketchapp';
import SettingRow from './components/ListItem/SettingRow';
import {StatusBarDark} from "./components/StatusBar/index";
import {TitleBarDark} from "./components/Navigation/index";
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
import GridView from "./components/GridView/GridView";
import ListView from "./components/ListView/ListView";
import TabBarItem from "./components/Tabbar/TabBarItem";
import {DATA, IMAGES, SettingData, Tags, TwoData} from "./data/index";

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
        <GridView items={Tags} renderItem={(item) =>
            <TabBarItem text={item.text}
                        icon={item.icon}
            />
        }/>
        <Space/>

        <ListView
            items={TwoData}
            renderItem={(item) =>
                <TwoRow icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}/>}

        />

        <Space/>

        <ListView
            items={TwoData}
            renderItem={(item) =>
                <ThreeImageRow
                    title="区块在挖矿过程中产生，所谓的挖矿就是区块在挖矿过程中产生，所谓的挖矿就是区块在挖矿过程中产生，所谓的挖矿就是"
                    images={IMAGES}
                    from="悟空问答"
                    comment="2"
                    time="刚刚"
                />}
            renderSpace={() =>
                <Space/>
            }

        />

        <Space/>

        <ListView
            items={SettingData}
            renderItem={(item) =>
                <SettingRow icon={item.icon}
                            subtitle={item.text}/>}

        />
            <Tabbar tabbars={DATA}/>
        </Artboard>
    )
;


export default (context) => {


    let xml = <Demo5/>;
    render(xml, context.document.currentPage());

}


