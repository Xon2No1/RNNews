import React, {Component} from 'react';
import {Text} from "react-native";
import {Actions} from "react-native-router-flux";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view-fix-guo";
import NewsItemPage from "./NewsItemPage";


export default class NewsPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <ScrollableTabView
                //overlayTop 悬浮在内容视图之上 overlayBottom bottom
                tabBarPosition='top'
                renderTabBar={() => <ScrollableTabBar/>}
                onChangeTab={(obj) => {
                    //i：被选中的Tab的下标（从0开始）
                    // ref：被选中的Tab对象（基本用不到）

                }}
                onScroll={(postion) => {
                    // float类型 [0, tab数量-1]
                    console.log('scroll position:' + postion);
                }}
                locked={false}//是否可拖动 默认false
                initialPage={1}//初始页面角标
                //tabBarUnderlineStyle(style) 下划线设置
                //tabBarBackgroundColor(String)
                //tabBarActiveTextColor(String)
                //tabBarInactiveTextColor(String)
                //tabBarTextStyle(Object)
                // scrollWithoutAnimation={true}//(Bool，默认为false)
            >
                <NewsItemPage tabLabel='头条' type='top'/>
                <NewsItemPage tabLabel='社会' type='shehui'/>
                <NewsItemPage tabLabel='国内' type='guonei'/>
                <NewsItemPage tabLabel='国际' type='国际'/>
                <NewsItemPage tabLabel='娱乐' type='yule'/>
                <NewsItemPage tabLabel='体育' type='tiyu'/>
                <NewsItemPage tabLabel='军事' type='junshi'/>
                <NewsItemPage tabLabel='科技' type='keji'/>
                <NewsItemPage tabLabel='财经' type='caijing'/>
            </ScrollableTabView>
        );
    }

}