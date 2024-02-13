import React, {useEffect, useState} from "react";
import {SafeAreaView, Text, FlatList, View, StyleSheet} from "react-native";
import {Button} from "react-native-paper";

import io from "socket.io-client";
import {Input} from "../constants/style/styled";

export const Profil = ({navigation}) => {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([]);
    const socket = io("http://localhost:3000"); // Assurez-vous de spécifier le bon port ici

    useEffect(() => {
        socket.on("chat message", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const handleSubmit = () => {
        if (inputValue) {
            const messageType = 'sent';
            const user = "toto"// Utilisez 'sent' pour les messages envoyés par cet utilisateur
            socket.emit("chat message", inputValue, messageType, user); // Envoyer le message avec le type
            const message = {text: inputValue, type: messageType};
            setMessages((prevMessages) => [...prevMessages, message]);
            setInputValue("");
        }
    };

    return (
        <SafeAreaView>
            <Text>Profil</Text>
            <Input placeholder="Email" value={inputValue} onChangeText={(text) => setInputValue(text)}/>
            <Button onPress={handleSubmit}>Submit</Button>
            <Button mode="contained" onPress={() => navigation.navigate("Home")}>
                Go to Home
            </Button>
            <Text>Messages:</Text>
            <FlatList data={messages} renderItem={({item}) => (
                <View>
                    <Text style={item.type === "sent" ? styles.sentMessage : styles.receivedMessage}>{item.text}</Text>
                </View>
            )} keyExtractor={(item, index) => index.toString()}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sentMessage: {
        backgroundColor: "lightblue", // Style pour les messages envoyés
        alignSelf: "flex-end",
        padding: 5,
        margin: 5,
        borderRadius: 10,
    },
    receivedMessage: {
        backgroundColor: "lightgreen", // Style pour les messages reçus
        alignSelf: "flex-start",
        padding: 5,
        margin: 5,
        borderRadius: 10,
    },
});
