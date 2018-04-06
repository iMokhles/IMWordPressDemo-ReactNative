import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

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
import HCWPApi from "../../Services/HCWPApi";
import {HCTheme} from "../../Theme/HCTheme";
import HCPostScreen from "./HCPostScreen";
import HCContainerWithHeader from "../Components/HCContainerWithHeader";
import HCBigImageCell from "../Components/HCBigImageCell";

var keepPosts = [];

export default class HCAdassatScreen extends Component {

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
        // if(!keepPosts.length){
        //     this.fetchData();
        // }
    }
    fetchData() {
        HCWPApi.getPostsByCategory(15)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setPosts( responseJson );
            }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }
    setPosts( data ) {
        if (keepPosts.length < 1) {
            keepPosts = data;
            this.forceUpdate()
        }

    }
    getPosts() {
        console.log( "Get posts" );
        return keepPosts
    }

    render() {
        const { params } = this.props.navigation.state;
        const pageTitle = params ? params.pageTitle : "تحديثات";

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

                            <HCBigImageCell
                                post_id={post.id}
                                post_title={post.title.rendered}
                                post_content={post.content.rendered}
                                post_date={post.date}
                                featured_media={post.featured_media}
                            />

                            // <ListItem last
                            //           style={HCTheme.cardListItemStyle}
                            //           key={post.id} onPress={() => {
                            //     this.props.navigation.push("postpage", {
                            //         postId: post.id,
                            //         postTitle: post.title.rendered,
                            //         postContent: post.content.rendered,
                            //         postDate: post.date});
                            // }}>
                            //     <Card style={HCTheme.cardStyle}>
                            //         <CardItem cardBody>
                            //             <WebImage source={{ uri: post.better_featured_image.source_url }}
                            //                       resizeMode="cover"
                            //                       style={HCTheme.cardBodyImage}/>
                            //         </CardItem>
                            //         <CardItem style={HCTheme.cardHeaderStyle} header>
                            //             <Text style={HCTheme.cardTextStyle}>{post.title.rendered}</Text>
                            //         </CardItem>
                            //         <CardItem footer>
                            //             <TimeAgo time={post.date} />
                            //         </CardItem>
                            //     </Card>
                            // </ListItem>
                        )}
                    </List>
                </View>
                </HCContainerWithHeader>
            );
        }
    }
}