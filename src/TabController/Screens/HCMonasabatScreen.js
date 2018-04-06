import React, { Component } from 'react';
import { RefreshControl, StyleSheet, Image, ActivityIndicator } from 'react-native';
import TimeAgo from 'react-native-timeago';
import WebImage from 'react-native-web-image';
import { NavigationActions } from "react-navigation";

import {
    Container, Content, Title, Right, Left,
    Body, Header, Button, Icon,
    Tabs, Tab, TabHeading, Text,
    Footer, FooterTab, getTheme,
    StyleProvider, View, Grid, Col,
    List, Thumbnail, ListItem, CardItem,
    Card
} from 'native-base';
import HCWPApi from "../../Services/HCWPApi";
import {HCTheme} from "../../Theme/HCTheme";
import HCContainerWithHeader from "../Components/HCContainerWithHeader";
import HCSmallImageCell from "../Components/HCSmallImageCell";

var keepPosts = [];

export default class HCMonasabatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isRefreshing: false,
        };

    }

    componentWillMount() {
        if(!keepPosts.length){
            this.fetchData();
        }
    }
    componentDidMount() {

    }
    fetchData() {
        HCWPApi.getPostsByCategory(6)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setPosts( responseJson );
            }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }
    setPosts( data ) {
        if (!keepPosts.length) {
            keepPosts = data;
            this.forceUpdate()
        }
    }
    getPosts() {
        console.log( "Get posts" );
        return keepPosts
    }
    _onError = (e) => {
        console.log(e)
    }

    render() {
        const { params } = this.props.navigation.state;
        const pageTitle = params ? params.pageTitle : "أخبار";

        if (!keepPosts.length) {
            return (
                <HCContainerWithHeader
                    pageTitle={pageTitle}
                >
                    <View padder style={{ flex: 1, marginTop: 0}}>
                        <ActivityIndicator size="large" color="#000000" />
                    </View>
                </HCContainerWithHeader>
            );
        } else {
            return (
                <HCContainerWithHeader
                    pageTitle={pageTitle}
                >
                    <View padder style={{ flex: 1, marginTop: 0 }}>
                        <List>
                            {this.getPosts().map( ( post, i ) =>

                                <HCSmallImageCell
                                    post_id={post.id}
                                    post_title={post.title.rendered}
                                    post_content={post.content.rendered}
                                    post_date={post.date}
                                    featured_media={post.featured_media}
                                />

                                // <ListItem last
                                //           style={HCTheme.listItemStyle}
                                //           key={post.id} onPress={() => {
                                //
                                //     this.props.navigation.push("postpage", {
                                //         postId: post.id,
                                //         postTitle: post.title.rendered,
                                //         postContent: post.content.rendered,
                                //         postDate: post.date});
                                // }}>
                                //     <Body>
                                //     <Text style={HCTheme.listItemTextStyle}>{post.title.rendered}</Text>
                                //     <Text note><TimeAgo time={post.date} /></Text>
                                //     </Body>
                                //     <Thumbnail style={HCTheme.listItemThumbStyle} source={{ uri: "" }} onError={this._onError} />
                                // </ListItem>
                            )}
                        </List>

                    </View>
                </HCContainerWithHeader>


            );
        }
    }
}
