import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import {HCTheme} from "../../Theme/HCTheme";
import HCWPApi from "../../Services/HCWPApi";
import TimeAgo from 'react-native-timeago';
import WebImage from 'react-native-web-image';

import {
    Container, Content, Title, Right, Left,
    Body, Header, Button, Icon,
    Tabs, Tab, TabHeading, Text,
    Footer, FooterTab, getTheme,
    StyleProvider, View, Grid, Col,
    List, Thumbnail, ListItem, CardItem,
    Card
} from 'native-base';

export default class HCBigImageCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: ""
        };
    }

    componentDidMount() {

        //
        if(this.props.featured_media) {

            HCWPApi.getPostMedia(this.props.featured_media)
                .then(response => response.json())
                .then(json => {
                    this.setState({url:json.source_url})
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    render() {
        return (
            <ListItem last
                      style={HCTheme.cardListItemStyle}
                      key={this.props.post_id} onPress={() => {
                this.props.navigation.push("postpage", {
                    postId: this.props.post_id,
                    postTitle: this.props.post_title,
                    postContent: this.props.post_content,
                    postDate: this.props.post_date});

            }}>
                <Card style={HCTheme.cardStyle}>
                    <CardItem cardBody>
                        <WebImage source={{ uri: this.state.url }}
                                  resizeMode="cover"
                                  style={HCTheme.cardBodyImage}/>
                    </CardItem>
                    <CardItem style={HCTheme.cardHeaderStyle} header>
                        <Text style={HCTheme.cardTextStyle}>{this.props.post_title}</Text>
                    </CardItem>
                    <CardItem footer>
                        <TimeAgo time={this.props.post_date} />
                    </CardItem>
                </Card>
            </ListItem>
        );
    }
}