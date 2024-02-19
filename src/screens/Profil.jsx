import React, {useEffect, useState} from "react";
import {ScrollView, TouchableOpacity, View, TextInput} from "react-native";
import {Avatar, Divider, Text, Button, HelperText} from "react-native-paper";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import {ActionButton, DefaultView, Input, InputText} from "../constants/style/styled";
import avatar from "../../assets/images/Avatar.webp";
import {useSelector} from "react-redux";
import {setUserData} from "../feature/user/userDataSlice";
import {fetchWithTokenRefresh} from "../helpers/FetchRefreshToken";

export const Profil = ({navigation}) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        details: ''
    })


    const [editMode, setEditMode] = useState(false);
    const dataUser = async (token) => {
        const req = await fetchWithTokenRefresh('https://mikeleman.fr/api/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (req) {
            console.log(req)
            // setUser(res)
            // dispatch(setUserData(res))
        }
    }
    useEffect(() => {
        dataUser()
    }, [])

    return (
        <DefaultView>
            <ScrollView>
                <View style={{flex: 1, justifyContent: 'center', marginTop: 50}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Avatar.Image size={150} source={avatar}/>
                        <View style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: '#EEEEEE', fontWeight: 'bold', marginLeft: 10,
                                marginRight: 10, textAlign: 'center', fontSize: 20,
                            }}>
                                TOTO
                            </Text>
                            <TouchableOpacity onPress={() => setEditMode(true)}>
                                <MaterialIcons name="mode-edit" size={20} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {editMode ? (
                        <View style={{marginTop: 20}}>
                            <InputText>Nom d'utilisateur</InputText>
                            <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'}
                                   activeUnderlineColor={'#EEEEEE'} value={user.value.username}
                                   onChangeText={text => setUser({...user, username: text})} autoCapitalize='none'/>
                            <HelperText type={'info'} visible={user.username.length > 0} style={{color: 'green'}}>Nom
                                d'utilisateur
                                valide</HelperText>
                            <InputText>Email</InputText>
                            <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'}
                                   activeUnderlineColor={'#EEEEEE'} value={user.email}
                                   onChangeText={text => setUser({...user, username: text})} autoCapitalize='none'/>
                            <HelperText type={'info'} visible={user.length > 0} style={{color: 'green'}}>Nom
                                d'utilisateur
                                valide</HelperText>
                            <InputText>Biographie</InputText>
                            <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'} multiline={true}
                                   activeUnderlineColor={'#EEEEEE'} value={user.bio} numberOfLines={5}
                                   onChangeText={text => setUser({...user, bio: text})} autoCapitalize='none'/>
                            <HelperText type={'info'} visible={user.bio.length > 0} style={{color: 'green'}}>Nom
                                d'utilisateur
                                valide</HelperText>
                            <ActionButton onPress={() => setEditMode(false)}>
                                Enregistrer
                            </ActionButton>
                        </View>
                    ) : (
                        <View style={{marginTop: 20}}>
                            <Text style={{
                                color: '#EEEEEE',
                                marginLeft: 10,
                                fontSize: 22,
                                marginBottom: 10,
                                textDecorationLine: 'underline'
                            }}>
                                Information de l'utilisateur
                            </Text>
                            {user.value && (<View style={{marginLeft: 10, gap: 5}}>
                                <Text style={{color: '#EEEEEE', marginLeft: 10, fontSize: 20}}>
                                    Username : <Text
                                    style={{fontWeight: 'bold', color: '#EEEEEE'}}>{user.value.username}</Text>
                                </Text>
                                <Text style={{color: '#EEEEEE', marginLeft: 10, fontSize: 20}}>
                                    Email : <Text
                                    style={{fontWeight: 'bold', color: '#EEEEEE'}}>{user.value.email}</Text>
                                </Text>
                                <Text style={{color: '#EEEEEE', marginLeft: 10, fontSize: 20}}>
                                    Biographie : <Text
                                    style={{fontWeight: 'bold', color: '#EEEEEE'}}>{user.value.details}</Text>
                                </Text>
                            </View>)}
                        </View>
                    )}
                </View>
            </ScrollView>
        </DefaultView>
    );
};
