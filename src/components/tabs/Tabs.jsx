import {Message} from "../../screens/Message";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export const Tabs = () => {
    const Tab = createBottomTabNavigator();
   return(
       <Tab.Navigator screenOptions={{ headerShown: false }}>
           <Tab.Screen name="Message" component={Message} />
       </Tab.Navigator>
   )
}