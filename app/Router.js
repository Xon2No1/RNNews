import React, {Component} from 'react';
import {Scene, Router, Lightbox, Drawer} from "react-native-router-flux";

import News from "./component/NewsPage";
import Today from "./component/ToadyPage";


const getRouter = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="news" component={News} title="新闻" initial={true}/>
                <Scene key="today" component={Today} title="历史今日"/>
            </Scene>
        </Router>
    );
};

export default getRouter;