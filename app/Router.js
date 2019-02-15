import React, {Component} from 'react';
import {Scene, Router, Lightbox, Drawer} from "react-native-router-flux";

import News from "./component/NewsPage";
import Today from "./component/ToadyPage";
import Joker from "./component/JokerPage";
import TabIcon from "./component/widget/TabIcon";
import * as Constant from './style/constant'


const getRouter = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="main"
                    initial
                    tabs={true}
                    lazy
                    wrap={false}
                    showLabel={false}
                    tabBarPosition={"bottom"}
                    title={"RNNews"}
                    tabBarStyle={{
                        height: Constant.tabBarHeight,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Constant.tabBackgroundColor
                    }}>
                    <Scene key="news" component={News} icon={TabIcon} title={"新闻"} tabIconName={'tabNews'}/>
                    <Scene key="today" component={Today} icon={TabIcon} title={"历史今日"} tabIconName={'tabToday'}/>
                    <Scene key="joker" component={Joker} icon={TabIcon} title={"段子"} tabIconName={'tabJoker'}/>
                </Scene>
            </Scene>
        </Router>
    );
};
//initial={true}

export default getRouter;