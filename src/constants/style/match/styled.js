import styled from "styled-components/native";
import {Image, View} from "react-native";
import {Text} from "react-native-paper";

const MatchImage = styled(Image)(() => ({
    width: 300,
    height: 300,
    resizeMode: 'contain',
}));

const BadgeYes = styled(View)(() => ({
    position: 'absolute',
    top: 200,
    right: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#20573E',
}));
const BadgeText = styled(Text)(() => ({
    color: '#2F7C57',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
}));

const BadgeNo = styled(View)(() => ({
    position: 'absolute',
    top: 200,
    left: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7C2F2F',
}));
const BadgeTextNo = styled(Text)(() => ({
    color: '#7C2F2F',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
}));


export {MatchImage, BadgeYes, BadgeText, BadgeTextNo, BadgeNo};