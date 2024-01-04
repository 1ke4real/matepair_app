import {SafeAreaView, Text} from "react-native";
import {Button} from "react-native-paper";

export const Message = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Message</Text>
            <Button mode="contained" onPress={()=> navigation.navigate('Home')}>
                Go to Home
            </Button>
        </SafeAreaView>
    )
}