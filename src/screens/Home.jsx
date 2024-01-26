import { Image, Text } from "react-native";
import { defaultStyle } from "../constants/style/styled";
import {DefaultView, ActionButton, ActionButtonText, Title} from "../constants/style/styled";
export const Home = ({ navigation }) => {
    const logo = require('../../assets/images/Gamepad.png');
    return (
        <DefaultView style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image source={logo} style={defaultStyle.logo} />
            <Title>MatePair</Title>
            <ActionButton mode="contained" onPress={() => navigation.navigate('Login')}>
                <ActionButtonText>Login</ActionButtonText>
            </ActionButton>
            <ActionButton mode="contained" onPress={() => navigation.navigate('Register')}>
                <ActionButtonText>Inscrire</ActionButtonText>
            </ActionButton>
            <ActionButton mode="contained" onPress={() => navigation.navigate('Register')}>
                <ActionButtonText>Match</ActionButtonText>
            </ActionButton>
        </DefaultView>
    );
};
