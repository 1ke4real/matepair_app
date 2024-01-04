import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home} from "./src/screens/Home";
import {Tabs} from "./src/components/tabs/Tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="Tabs" component={Tabs} />
       </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
