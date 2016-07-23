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
        justifyContent: 'center',
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
    logIn: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 300,
    },
    radioContainer: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        marginTop: 10
    },
    radioText: {
        marginLeft: 10
    },
    logInTitle: {
        marginTop: 8,
        fontSize: 20
    },
    logInSubTitle: {
        fontSize: 10,
        marginTop: -5
    },
    logInButton: {
        marginBottom: -8,
        borderRadius: 0
    },
    logout: {
        position: 'absolute',
        top: 20,
        left: 7,
        width: 35,
        height: 35,
        opacity: 0.5,
        borderRadius: 50
    },
    logoutIcon: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    squareButton: {
        borderRadius: 0
    },
    spinner: {

    }
});
