import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {Button, Divider} from "react-native-paper";
import {DefaultView, Input, Search, Title} from "../constants/style/styled";
import {Ionicons} from "@expo/vector-icons";
import {MessageList} from "../components/MessageList";
import {CardMatch} from "../components/CardMatch";

export const Message = ({navigation}) => {
    return (
        <DefaultView>
            <ScrollView>
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
                <CardMatch/>
                <ScrollView style={{marginTop: 10, gap: 10, marginLeft: 20, marginRight: 20}}>
                    <Text style={{color: "#eeeeee", fontWeight: 'bold'}}>Message</Text>
                    <MessageList/>
                    <MessageList/>
                    <MessageList/>
                    <MessageList/>
                    <MessageList/>
                    <MessageList/>
                </ScrollView>
            </ScrollView>
        </DefaultView>
    )
}