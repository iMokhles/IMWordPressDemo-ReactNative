import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import {
    Container, Content, Left,
    Body, Header, Button, Icon, Text,
    CardItem, Card
} from 'native-base';
export default class HCContainerWithHeader extends Component {


    render() {
        return (
            <Container>
                <Header>
                    <Left style={{width: 40, padding: 0}} containerView={{width: 40, padding: 0}}>
                        <Button transparent
                                onPress={this.props.infoPressed}>
                            <Icon style={styles.headerInfoButtonIconStyle} name='information-circle' />
                        </Button>
                    </Left>
                    <Body>
                    <Text style={styles.headerTextStyle}>{this.props.pageTitle}</Text>
                    </Body>
                    <Left/>
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            {this.props.children}
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
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