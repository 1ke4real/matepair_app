import {SafeAreaView, StyleSheet, View} from "react-native";
import styled from 'styled-components/native';
import {Button, Text} from "react-native-paper";
import {TextInput} from 'react-native-paper';


const defaultStyle = StyleSheet.create({
    text: {
        color: '#EEEEEE',
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',

    },
    homeButtonText: {}
});

const DefaultView = styled(SafeAreaView)(() => ({
    backgroundColor: '#111111',
    flex: 1,
}));
const Title = styled(Text)(() => ({
    fontSize: 30,
    color: '#EEEEEE',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
}));
const ActionButton = styled(Button)(() => ({
    backgroundColor: '#18111B',
    borderWidth: 1,
    borderColor: '#54346B',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    margin: 10,
}));
const ActionButtonText = styled(Text)(() => ({
    color: '#8457AA',
    fontSize: 15,
}));

const Input = styled(TextInput)(() => ({
    backgroundColor: '#222222',
    borderColor: '#606060',
    padding: 1,
    marginLeft: 10,
    marginRight: 10,
    text: '#EEEEEE',
}));
const Search = styled(TextInput)(() => ({
    backgroundColor: '#222222',
    borderWidth: 1,
    borderColor: '#606060',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    text: '#EEEEEE',
}));
const InputText = styled(Text)(() => ({
    color: '#EEEEEE',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
}));


export {
    defaultStyle, DefaultView, ActionButton, ActionButtonText, Input, InputText, Title, Search
};