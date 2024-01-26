import {View, Text, Image} from "react-native";
import {Divider} from "react-native-paper";

export const MessageList = () => {
    return (
        <View style={{flexDirection: "row", alignItems: 'center', gap: 10, marginTop: 10, marginBottom: 10}}>
            <Image source={{uri: 'https://placekitten.com/300/200'}}
                   style={{height: 80, width: 80, borderRadius: 100}}/>
            <View style={{gap: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Toto</Text>
                <Text style={{color: 'white'}}>Toto</Text>
            </View>
        </View>
    )
}