import {SafeAreaView, Text} from "react-native";
import {defaultStyle} from "../constants/style/styled";
import {Button} from "react-native-paper";

export const Home = ({navigation}) => {
    return (
        <SafeAreaView style={defaultStyle.container}>
            <Text style={defaultStyle.text}>Home</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Tabs')}>
                Go to Message
            </Button>
        </SafeAreaView>

    )
}