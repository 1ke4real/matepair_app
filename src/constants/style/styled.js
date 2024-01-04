import {StyleSheet} from "react-native";

const defaultStyle = StyleSheet.create({
    container: {
        backgroundColor: '#111111',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#EEEEEE',
    },
    title: {
        fontSize: 30,
        color: '#EEEEEE',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',

    },
    homeButton: {
        backgroundColor: '#222222',
        borderWidth: 1,
        borderColor: '#606060',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        margin: 10,
    },
    homeButtonText: {
        color: '#EEEEEE',
        fontSize: 20,
    }
});




export {defaultStyle};