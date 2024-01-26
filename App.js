import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home} from "./src/screens/Home";
import {Tabs} from "./src/components/tabs/Tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Login} from "./src/screens/Login";
import {Register} from "./src/screens/Register";

export default function App() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name={"Register"} component={Register} />
            <Stack.Screen name={"Login"} component={Login} />
           <Stack.Screen name="Tabs" component={Tabs} />
       </Stack.Navigator>
      </NavigationContainer>
  );
}
