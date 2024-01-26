import {Message} from "../../screens/Message";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Match} from "../../screens/Match";

export const Tabs = () => {
    const Tab = createBottomTabNavigator();
   return(
       <Tab.Navigator screenOptions={{ headerShown: false }}>
           <Tab.Screen name="Match" component={Match} />
           <Tab.Screen name="Message" component={Message} />
       </Tab.Navigator>
   )
}