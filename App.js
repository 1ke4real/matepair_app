import {NavigationContainer} from '@react-navigation/native';
import {Home} from "./src/screens/Home";
import {Tabs} from "./src/components/tabs/Tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from "./src/screens/Login";
import {Register} from "./src/screens/Register";
import store from "./src/app/store";
import {Provider} from "react-redux";
import {StatusBar} from "react-native";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae"/>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name={"Register"} component={Register}/>
                    <Stack.Screen name={"Login"} component={Login}/>
                    <Stack.Screen name="Tabs" component={Tabs}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
