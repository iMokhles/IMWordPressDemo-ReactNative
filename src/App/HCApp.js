import React, { Component } from 'react';
import HCMainTab from "../TabController/HCMainTab";

export default class HCApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount () {

    }

    render () {
        return (
            <HCMainTab />
        );
    }

}