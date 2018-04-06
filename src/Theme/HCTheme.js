import {
    StyleSheet,
} from 'react-native';

export const HCTheme = StyleSheet.create({
    listItemThumbStyle: {
        borderRadius: 10,
        width: 56,
        height: 56
    },
    listItemTextStyle: {
        textAlign: 'right',
    },
    listItemStyle: {
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 0,
        paddingLeft: 15,
        paddingTop: 0,
        paddingBottom: 0,
        borderBottomWidth: 0,
    },
    cardListItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 0,
        paddingLeft: 15,
        paddingTop: 0,
        paddingBottom: 0,
        borderBottomWidth: 0,
    },
    cardStyle: {
        // borderColor: 'transparent',
        shadowColor: 'transparent',
        shadowOpacity: 0.0,
        shadowRadius: 0,
    },
    cardBodyImage: {
        height: 200,
        width: null,
        flex: 1,
    },
    cardHeaderStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTextStyle: {
        fontSize: 17,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0
    },
    cardFooterTextStyle: {
        fontSize: 12,
        paddingLeft: 0,
        paddingRight: 0,
        color: '#9f9f9f'
    },


});