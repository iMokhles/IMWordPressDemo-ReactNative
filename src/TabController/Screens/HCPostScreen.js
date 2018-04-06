import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import WebImage from 'react-native-web-image';
import {
    Container, Content, Left,
    Body, Header, Button, Icon, Text, View,
    CardItem, Card
} from 'native-base';
import TimeAgo from 'react-native-timeago';

function _drawImageScaled(img) {
    let screenSize = Dimensions.get('window');
    let hRatio = screenSize.width / img.width;
    let vRatio = screenSize.height / img.height;
    let ratio = Math.min(hRatio, vRatio);
    return {width: parseInt(img.width * ratio), height: parseInt(img.height * ratio)};
}
export default class HCPostScreen extends Component {

    _renderNode(node, index, siblings, parent, defaultRenderer) {
        if (node.name === 'img') {
            const a = node.attribs;
            return (
                <View
                    key={index}
                >
                    <WebImage
                        key={index}
                        source={{uri: a.src}}
                        resizeMode="cover"
                        style={{
                            width: _drawImageScaled(a).width-55,
                            height: _drawImageScaled(a).height,
                        }}/>
                </View>
            );
        }
    }
    render() {

        const { params } = this.props.navigation.state;
        const postId = params ? params.postId : null;
        const postTitle =  "مقال";
        const postContent = params ? params.postContent : null;
        const postDate = params ? params.postDate : null;

        return (
            <Container>
                <Header>
                    <Left style={{width: 40, padding: 0}} containerView={{width: 40, padding: 0}}>
                        <Button transparent
                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}
                        >
                            <Icon style={styles.headerInfoButtonIconStyle} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Text style={styles.headerTextStyle}>{postTitle}</Text>
                    </Body>
                    <Left/>
                </Header>
                <Content>
                    <View padder style={{ flex: 1}}>
                        <Card>
                            <Body style={{margin: 20, flexDirection: 'column',}}>
                            <Text style={{fontWeight: '500', textAlign: 'center', fontSize: 25}}>{params.postTitle}</Text>
                            <Text note><TimeAgo time={postDate} /></Text>
                            </Body>
                            <CardItem>

                                <HTMLView
                                    value={postContent}
                                    stylesheet={styles}
                                    addLineBreaks={false}
                                    renderNode={this._renderNode}
                                />
                            </CardItem>
                        </Card>
                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#2793d3', // make links coloured pink
        textAlign: 'center'
    },
    img:{
        textAlign: 'center'
    },
    p: {
        color: '#2C3E50',
        marginTop: -5,
        marginBottom: -10,
        fontFamily: 'Arial',
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center'
    },
    strong: {
        marginBottom: 0,
        color: '#2C3E50'
    },
    headerInfoButtonIconStyle: {
        fontSize: 28,
        padding: 0
    },
    tabButtonStyle: {
        padding: 0
    },
    tabTextStyle: {
        fontSize: 12,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0
    },
    headerTextStyle: {
        width: 200,
        height: 22,
        fontSize: 16,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0
    }
});
