import React, {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    page: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#404A46',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        marginTop: 50
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    login: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 300,
    }
});
