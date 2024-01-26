import {DefaultView} from "../constants/style/styled";
import {Text} from "react-native-paper";
import {View} from "react-native";
import SwipeCards from "../components/SwipeCards";

export const Match = ({ navigation }) => {

    return (
        <DefaultView style={{ flex: 1 }}>
           <SwipeCards/>
        </DefaultView>
    );
}