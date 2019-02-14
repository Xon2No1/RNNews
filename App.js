/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import getRouter from "./app/Router";


export default class App extends Component<> {
    render() {
        return (
            getRouter()
        );
    }
}
