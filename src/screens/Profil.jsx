import {SafeAreaView} from "react-native";
import {Button, Text} from "react-native-paper";

export const Profil = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Profil</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Home')}>
                Go to Home
            </Button>
        </SafeAreaView>
    )
}