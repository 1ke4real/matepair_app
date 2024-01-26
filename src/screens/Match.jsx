import {DefaultView, Title} from "../constants/style/styled";
import {Text} from "react-native-paper";
import {View} from "react-native";
import SwipeCards from "../components/SwipeCards";
import {HeaderText} from "../constants/style/auth/styled";
import {Ionicons} from '@expo/vector-icons';

export const Match = ({navigation}) => {

    return (
        <DefaultView style={{flex: 1}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-between",
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10
            }}>
                <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>MatePair</Text>
                <Ionicons name="notifications" size={24} color="#eeeeee"/>
            </View>
            <SwipeCards/>
        </DefaultView>
    );
}