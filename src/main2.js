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
import Carousel from "./components/Swipe/Carousel";
import MultiMediaRow from "./components/ListItem/VideoRow";
import TitleImageRow from "./components/ListItem/TitleImageRow";

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
                items={SettingData}
                renderItem={(item) =>
                    <SettingRow icon={item.icon}
                                subtitle={item.text}/>}

            />
            <Tabbar tabbars={DATA}/>
        </Artboard>
    )
;
const Demo6 = props => (
    <Artboard name='自动生成2'>
        <StatusBarDark/>
        <TitleBarDark backIcon={`${IMG_ENDPOINT}back@2x.png`}
                      title="标题"
                      rightText="编辑"
                      leftText="上一个"/>
        <SearchBar/>
        <Tab tabs={DATA}/>
        <Space/>


        <Swipe items={Tags}/>
        <Space/>
        <Carousel small={true} images={`${IMG_ENDPOINT}image1.jpg`}/>
        <Space/>

        <MultiMediaRow image={IMAGES[0].icon}
                       icon={IMAGES[0].icon}
        />
        <Space/>
        <TitleImageRow image={IMAGES[0].icon}
                       icon={IMAGES[0].icon}
        />
        <Space/>

        <ListView
            items={TwoData}
            renderItem={(item) =>
                <ThreeImageRow
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


            <Tabbar tabbars={DATA}/>
        </Artboard>
    )
;


export default (context) => {


    // let xml = <Demo5/>;
    // render(xml, context.document.addBlankPage());
    let xml2 = <Demo6/>;
    render(xml2, context.document.currentPage());

}


