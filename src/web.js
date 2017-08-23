/**
 * sketch-entry.js
 * same setup as other examples
 */
import React from 'react';

import SettingRow from './components/ListItem/SettingRow';
import StatusBarDark from "./components/StatusBar/StatusBarDark";
import TitleBarDark from "./components/Navigation/TitleBarDark";
import Config from "./config/index";
import Tabbar from "./components/Tabbar/Tabbar";

const IMG_ENDPOINT = `${Config.IMAGE_SERVER_URL}:${Config.IMAGE_SERVER_PORT}/`;




const DATA = [
    {
        text: '支付宝',
        icon: `${IMG_ENDPOINT}wifi-black@2x.png`,
        selected: true,
    },
    {
        text: '发现1',
        icon: `${IMG_ENDPOINT}wifi-black@2x.png`,
        selected: false,
    },
    {
        text: '朋友',
        icon: `${IMG_ENDPOINT}Wifi-black@2x.png`,
        selected: false,
    }, {
        text: '我的',
        icon: `${IMG_ENDPOINT}Wifi-black@2x.png`,
        selected: false,
    }, {
        text: '我的',
        icon: `${IMG_ENDPOINT}Wifi-black@2x.png`,
        selected: false,
    },
];



export default () => (

    <div>
        <h1 style={{ fontFamily: "'SF UI Display', 'San Francisco'" }}>Cross-platform components!</h1>
        <p style={{ fontFamily: "'SF UI Text', 'San Francisco'", maxWidth: '28em', lineHeight: 1.5 }}>
            &lt;Profile /&gt; is defined with platform-independent components
            from react-primitives. We can use it in our web UI, and
            continue to use primitives, or mix them with DOM elements
        </p>
        <div style={{ display: 'flex', flexDirection: 'column',height:667,width:375 }}>
            <StatusBarDark/>
            <TitleBarDark backIcon={`${IMG_ENDPOINT}back@2x.png`}
                          title="标题"
                          rightText="编辑"
                          leftText="上一个"/>

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
            <Tabbar tabbars={DATA}/>
        </div>
    </div>




)


