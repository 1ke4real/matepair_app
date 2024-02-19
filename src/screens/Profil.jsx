import React, {useEffect, useState} from "react";
import {ScrollView, TouchableOpacity, View, TextInput, FlatList} from "react-native";
import {Avatar, Divider, Text, Button, HelperText, SegmentedButtons, Chip} from "react-native-paper";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import {ActionButton, DefaultView, Input, InputText} from "../constants/style/styled";
import avatar from "../../assets/images/Avatar.webp";
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../feature/user/userDataSlice";
import {fetchWithTokenRefresh} from "../helpers/FetchRefreshToken";
import {DayTime} from "../components/profil/DayTime";
import {DayWeek} from "../components/profil/DayWeek";
import {FavoriteGame} from "../components/profil/FavoriteGame";
import WeekdayChips from "../components/profil/edit/WeekdayChips";
import TimeOfDayChips from "../components/profil/edit/TimeOfDayChips";

export const Profil = ({navigation}) => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token.value);
    const [user, setUser] = useState({
        username: '',
        email: '',
        details: '',
        days_time: [],
        favorite_games: [],
        week_days: [],
    })
    const [daysTime, setDaysTime] = useState([])

    const [error, setError] = useState({
        message: '',
        status: false
    })
    const [editMode, setEditMode] = useState(false);
    const dataUser = async () => {
        const req = await fetchWithTokenRefresh('https://mikeleman.fr/api/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }, dispatch, token)

        if (req) {
            setUser(req)
        }
    }
    useEffect(() => {
        dataUser()
    }, [])
    useEffect(() => {
        if (user) {
            console.log(user)
        }
    }, [user])
    return (
        <DefaultView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
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
                                {user.username}
                            </Text>
                            <TouchableOpacity onPress={() => setEditMode(!editMode)}>
                                <MaterialIcons name="mode-edit" size={20} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {editMode ? (
                        <View style={{marginTop: 20}}>
                            <InputText>Nom d'utilisateur</InputText>
                            <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'}
                                   activeUnderlineColor={'#EEEEEE'} value={user.username}
                                   onChangeText={text => setUser({...user, username: text})} autoCapitalize='none'/>
                            <HelperText type={'info'} visible={error.status} style={{color: 'green'}}>Nom
                                d'utilisateur
                                valide</HelperText>
                            <InputText>Email</InputText>
                            <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'}
                                   activeUnderlineColor={'#EEEEEE'} value={user.email}
                                   onChangeText={text => setUser({...user, username: text})} autoCapitalize='none'/>
                            <HelperText type={'info'} visible={error.status} style={{color: 'green'}}>Nom
                                d'utilisateur
                                valide</HelperText>
                            <InputText>Description</InputText>
                            <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'} multiline={true}
                                   activeUnderlineColor={'#EEEEEE'} value={user.details} numberOfLines={5}
                                   onChangeText={text => setUser({...user, details: text})} autoCapitalize='none'/>
                            <HelperText type={'info'} visible={error.status} style={{color: 'green'}}>Nom
                                d'utilisateur
                                valide</HelperText>
                            <InputText>Jours disponible</InputText>
                            <WeekdayChips user={user} setUser={setUser}/>
                            <InputText>Heure disponible</InputText>
                            <TimeOfDayChips user={user} setUser={setUser}/>
                            <ActionButton onPress={() => setEditMode(false)}>
                                Enregistrer
                            </ActionButton>
                        </View>
                    ) : (
                        <View style={{marginTop: 20}}>
                            {user && (<View style={{marginLeft: 10, gap: 5}}>
                                <Text style={{color: '#EEEEEE', marginLeft: 10, fontSize: 20}}>
                                    Username : <Text
                                    style={{fontWeight: 'bold', color: '#EEEEEE'}}>{user.username}</Text>
                                </Text>
                                <Text style={{color: '#EEEEEE', marginLeft: 10, fontSize: 20}}>
                                    Email : <Text style={{fontWeight: 'bold', color: '#EEEEEE'}}>{user.email}</Text>
                                </Text>
                                {user.details && (
                                    <Text style={{color: '#EEEEEE', marginLeft: 10, fontSize: 20}}>
                                        Description : <Text
                                        style={{fontWeight: 'bold', color: '#EEEEEE'}}>{user.details}</Text>
                                    </Text>
                                )}

                                {user.days_time && (
                                    <View>
                                        <FlatList data={user.days_time} contentInsetAdjustmentBehavior="automatic"
                                                  renderItem={
                                                      ({item}) => <DayTime data={item}/>}
                                                  keyExtractor={item => item.id.toString()} horizontal={true}
                                                  showsHorizontalScrollIndicator={false}/>
                                    </View>
                                )}
                                {user.week_days && (
                                    <View>
                                        <FlatList data={user.week_days} renderItem={
                                            ({item}) => <DayWeek data={item}/>}
                                                  keyExtractor={item => item.id.toString()} horizontal={true}
                                                  showsHorizontalScrollIndicator={false}/>
                                    </View>
                                )}
                                {user.favorite_games && (
                                    <View>
                                        <FlatList data={user.favorite_games} renderItem={
                                            ({item}) => <FavoriteGame data={item}/>} horizontal={true}
                                                  showsHorizontalScrollIndicator={false}/>
                                    </View>
                                )
                                }
                            </View>)}
                        </View>
                    )}
                </View>
            </ScrollView>
        </DefaultView>
    );
};
