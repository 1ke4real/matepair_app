import {Message} from "../../screens/Message";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Match} from "../../screens/Match";
import {Ionicons} from '@expo/vector-icons';
import {Profil} from "../../screens/Profil";
import {StyleSheet} from "react-native";

export const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: styles.tabBottom,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#eeeeee',
        }}>
            <Tab.Screen name="Match" component={Match} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="game-controller" size={size} color={color}/>
                ),
            }}/>
            <Tab.Screen name="Message" component={Message} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="chatbox-ellipses" size={size} color={color}/>
                ),
            }}/>
            <Tab.Screen name="Profil" component={Profil} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person" size={size} color={color}/>
                ),
            }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBottom: {
        backgroundColor: '#111111',
        borderTopWidth: 0,
    },

})