import React, {Component} from 'react';
import {Text} from "react-native";
import {Actions} from "react-native-router-flux";


export default class NewsPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <Text onPress={() => Actions.today()}>
                新闻
            </Text>
        );
    }

}