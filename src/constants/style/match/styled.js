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
    borderColor: '#54346B',
    backgroundColor: '#121B17',
}));
const BadgeText = styled(Text)(() => ({
    color: '#8457AA',
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
    borderColor: '#72232D',
    backgroundColor: '#191111'
}));
const BadgeTextNo = styled(Text)(() => ({
    color: '#72232D',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
}));


export {MatchImage, BadgeYes, BadgeText, BadgeTextNo, BadgeNo};