import {View} from "react-native";
import {IconButton, Text,} from "react-native-paper";
import {Input, DefaultView, InputText, ActionButton, Title, ActionButtonText} from "../constants/style/styled";
import {useState} from "react";
import {HeaderButton, HeaderContainer, HeaderText} from "../constants/style/auth/styled";
import {Ionicons} from '@expo/vector-icons';

export const Login = ({navigation}) => {
    // const userJson = {
    //     "id": 1,
    //     "email": "user@example.com",
    //     "roles": ["ROLE_USER"],
    //     "password": "hashed_password",
    //     "username": "user123",
    //     "details": "Some details about the user",
    //     "favorite_games": ["Game1", "Game2"],
    //     "play_schedule": ["Monday", "Wednesday"],
    //     "send": [],
    //     "receive": [],
    //     "notifications": [],
    //     "first": [],
    //     "second": [],
    //     "weekDays": [],
    //     "timeDays": []
    // }
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const auth = async () => {
        if (login.email && login.password) {
            const req = await fetch('https://mikeleman.fr/auth', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            })
            const res = await req.json()
            console.log(res)
        }

    }


    return (
        <DefaultView style={{padding: 10}}>
            <HeaderContainer style={{margin: 10}}>
                <HeaderButton>
                    <Ionicons name="ios-caret-back" size={20} color="#8457AA" onPress={() => navigation.goBack()}/>
                </HeaderButton>
                <HeaderText>S'inscrire</HeaderText>
            </HeaderContainer>
            <View style={{marginBottom: 10, paddingLeft: 10, paddingRight: 10, flex: 1, justifyContent: 'center'}}>
                <InputText>Email</InputText>
                <Input underlineColor="transparent" theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'}
                       activeUnderlineColor={'#EEEEEE'} onChangeText={text => setLogin({...login, email: text})}
                       autoCapitalize='none'/>
                <InputText>Password</InputText>
                <Input underlineColor="transparent" theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'}
                       activeUnderlineColor={'#EEEEEE'} onChangeText={text => setLogin({...login, password: text})}
                       autoCapitalize='none'/>

                <ActionButton mode="contained" onPress={() => auth()}>
                    <ActionButtonText>Se Connecter</ActionButtonText>
                </ActionButton>
                <Text style={{
                    color: '#EEEEEE', marginTop: 10, fontWeight: 'bold', marginLeft: 10,
                    marginRight: 10,
                }}>Mot de passe oublié ?</Text>
            </View>

        </DefaultView>
    )
}