import { Image, SafeAreaView, Text } from "react-native";
import { defaultStyle } from "../constants/style/styled";
import { Button } from "react-native-paper";
import logo from "../../assets/images/Gamepad.png";

export const Home = ({ navigation }) => {
    const logo = require('../../assets/images/Gamepad.png');
    const logoText = require('../../assets/images/text.png');
    return (
        <SafeAreaView style={defaultStyle.container}>
            {/*<Image source={logoText} style={defaultStyle.logo} />*/}
            <Image source={logo} style={defaultStyle.logo} />
            <Text style={defaultStyle.title}>MatePair</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Tabs')} style={defaultStyle.homeButton}>
                <Text style={defaultStyle.homeButtonText}>Bienvenue</Text>
            </Button>
        </SafeAreaView>
    );
};
