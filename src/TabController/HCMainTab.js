import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Right, Title } from 'native-base';
import HCAdassatScreen from "./Screens/HCAdassatScreen";
import HCSeyahaScreen from "./Screens/HCSeyahaScreen";
import HCTaghtiatScreen from "./Screens/HCTaghtiatScreen";
import HCMonasabatScreen from "./Screens/HCMonasabatScreen";
import HCElanatScreen from "./Screens/HCElanatScreen";
import HCPostScreen from "./Screens/HCPostScreen";


const monasabatStack = StackNavigator({
    monasabat: { screen: props => <HCMonasabatScreen {...props} /> },
    postpage: { screen: props => <HCPostScreen {...props} /> },
}, {
    headerMode: 'none',
});

const seyahaStack = StackNavigator({
    seyaha: { screen: props => <HCSeyahaScreen {...props} /> },
    postpage: { screen: props => <HCPostScreen {...props} /> },
}, {
    headerMode: 'none',
});


const elanatStack = StackNavigator({
    elanat: { screen: props => <HCElanatScreen {...props} /> },
    postpage: { screen: props => <HCPostScreen {...props} /> },
}, {
    headerMode: 'none',
});


const adassatStack = StackNavigator({
    adassat: { screen: props => <HCAdassatScreen {...props} /> },
    postpage: { screen: props => <HCPostScreen {...props} /> },
}, {
    headerMode: 'none',
});


const taghtyatStack = StackNavigator({
    taghtyat: { screen: props => <HCTaghtiatScreen {...props} /> },
    postpage: { screen: props => <HCPostScreen {...props} /> },
}, {
    headerMode: 'none',
});




export default (MainScreenNavigator = TabNavigator(
    {
        monasabat: { screen: monasabatStack },
        seyaha: { screen: seyahaStack },
        elanat: { screen: elanatStack },
        adassat: { screen: adassatStack },
        taghtyat: { screen: taghtyatStack },
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            style={styles.tabButtonStyle}
                            active={props.navigationState.index === 4}
                            onPress={() => {
                                if (props.navigationState.index !== 4) {
                                    props.navigation.navigate("taghtyat", {
                                        pageTitle: "برامج خارجية",
                                    })
                                }
                            }}
                            title="برامج خارجية"
                        >
                            <Text style={styles.tabTextStyle}>برامج خارجية</Text>
                        </Button>
                        <Button
                            style={styles.tabButtonStyle}
                            active={props.navigationState.index === 3}
                            onPress={() => {
                                if (props.navigationState.index !== 3) {
                                    props.navigation.navigate("adassat", {
                                        pageTitle: "تحديثات",
                                    })
                                }

                            }}
                            title="تحديثات"
                        >
                            <Text style={styles.tabTextStyle}>تحديثات</Text>
                        </Button>
                        <Button
                            style={styles.tabButtonStyle}
                            active={props.navigationState.index === 2}
                            onPress={() => {
                                if (props.navigationState.index !== 2) {
                                    props.navigation.navigate("elanat", {
                                        pageTitle: "عام",
                                    })
                                }

                            }}
                            title="عام"
                        >
                            <Text style={styles.tabTextStyle}>عام</Text>
                        </Button>
                        <Button
                            style={styles.tabButtonStyle}
                            active={props.navigationState.index === 1}
                            onPress={() => {
                                if (props.navigationState.index !== 1) {
                                    props.navigation.navigate("seyaha", {
                                        pageTitle: "برامج",
                                    })
                                }

                            }}
                            title="برامج"
                        >
                            <Text style={styles.tabTextStyle}>برامج</Text>
                        </Button>
                        <Button
                            style={styles.tabButtonStyle}
                            active={props.navigationState.index === 0}
                            onPress={() => {
                                if (props.navigationState.index !== 0) {
                                    props.navigation.navigate("monasabat", {
                                        pageTitle: "أخبار",
                                    })
                                }
                            }}
                            title="أخبار"
                        >
                            <Text style={styles.tabTextStyle}>أخبار</Text>
                        </Button>

                    </FooterTab>
                </Footer>

                // <Footer>
                //     <FooterTab>
                //         <Button
                //             vertical
                //             active={props.navigationState.index === 0}
                //             onPress={() => props.navigation.navigate("LucyChat")}
                //         >
                //             <Icon name="bowtie" />
                //             <Text>Lucy</Text>
                //         </Button>
                //         <Button
                //             vertical
                //             active={props.navigationState.index === 1}
                //             onPress={() => props.navigation.navigate("JadeChat")}
                //         >
                //             <Icon name="briefcase" />
                //             <Text>Nine</Text>
                //         </Button>
                //         <Button
                //             vertical
                //             active={props.navigationState.index === 2}
                //             onPress={() => props.navigation.navigate("NineChat")}
                //         >
                //             <Icon name="headset" />
                //             <Text>Jade</Text>
                //         </Button>
                //     </FooterTab>
                // </Footer>
            );
        }
    }
));

// export default class HCMainTab extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedTab: 'مناسبات و فعاليات'
//         }
//     }
//
//     renderSelectedTab () {
//         switch (this.state.selectedTab) {
//             case 'مناسبات و فعاليات':
//                 return (<HCMonasabatScreen />);
//                 break;
//             case 'التغطيات المصورة':
//                 return (<HCTaghtiatScreen />);
//                 break;
//             case 'السياحة و السفر':
//                 return (<HCSeyahaScreen />);
//                 break;
//             case 'عدسات':
//                 return (<HCAdassatScreen />);
//                 break;
//             case 'إعلانات':
//                 return (<HCElanatScreen />);
//                 break;
//             default:
//         }
//     }
//     render() {
//         return (
//             <Container>
//                 <Header>
//                     <Left style={{width: 40, padding: 0}} containerView={{width: 40, padding: 0}}>
//                         <Button transparent>
//                             <Icon style={styles.headerInfoButtonIconStyle} name='information-circle' />
//                         </Button>
//                     </Left>
//                     <Body>
//                     <Text style={styles.headerTextStyle}>{this.state.selectedTab}</Text>
//                     </Body>
//                     <Left/>
//                 </Header>
//                 <Content>
//                     {this.renderSelectedTab()}
//                 </Content>
//                 <Footer>
//                     <FooterTab>
//                         <Button
//                             style={styles.tabButtonStyle}
//                             active={this.state.selectedTab==='التغطيات المصورة'}
//                             onPress={() => this.setState({selectedTab: 'التغطيات المصورة'})}
//                             title="التغطيات المصورة"
//                         >
//                             <Text style={styles.tabTextStyle}>التغطيات المصورة</Text>
//                         </Button>
//                         <Button
//                             style={styles.tabButtonStyle}
//                             active={this.state.selectedTab==='عدسات'}
//                             onPress={() => this.setState({selectedTab: 'عدسات'})}
//                             title="عدسات"
//                         >
//                             <Text style={styles.tabTextStyle}>عدسات</Text>
//                         </Button>
//                         <Button
//                             style={styles.tabButtonStyle}
//                             active={this.state.selectedTab==='إعلانات'}
//                             onPress={() => this.setState({selectedTab: 'إعلانات'})}
//                             title="إعلانات"
//                         >
//                             <Text style={styles.tabTextStyle}>إعلانات</Text>
//                         </Button>
//                         <Button
//                             style={styles.tabButtonStyle}
//                             active={this.state.selectedTab==='السياحة و السفر'}
//                             onPress={() => this.setState({selectedTab: 'السياحة و السفر'})}
//                             title="السياحة و السفر"
//                         >
//                             <Text style={styles.tabTextStyle}>السياحة و السفر</Text>
//                         </Button>
//                         <Button
//                             style={styles.tabButtonStyle}
//                             active={this.state.selectedTab==='مناسبات و فعاليات'}
//                             onPress={() => this.setState({selectedTab: 'مناسبات و فعاليات'})}
//                             title="مناسبات و فعاليات"
//                         >
//                             <Text style={styles.tabTextStyle}>مناسبات و فعاليات</Text>
//                         </Button>
//
//                     </FooterTab>
//                 </Footer>
//             </Container>
//         );
//     }
// }

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
