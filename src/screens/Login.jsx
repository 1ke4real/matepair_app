import {StatusBar, Touchable, TouchableOpacity, View} from "react-native";
import {HelperText, IconButton, Text,} from "react-native-paper";
import {Input, DefaultView, InputText, ActionButton, Title, ActionButtonText} from "../constants/style/styled";
import {useState} from "react";
import {HeaderButton, HeaderContainer, HeaderText} from "../constants/style/auth/styled";
import {Ionicons} from '@expo/vector-icons';
import {setToken} from "../feature/user/tokenSlice";

export const Login = ({navigation}) => {
    const [error, setError] = useState({
        message: '',
        status: false
    })
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
            if (res.token) {
                setToken(res.token)
                navigation.navigate('Tabs')
            } else {
                setError({
                    message: "Email ou mot de passe incorrecte",
                    status: true
                })
            }
        } else {
            setError({
                message: "Veuillez remplir tous les champs",
                status: true
            })
        }
    }

    return (
        <DefaultView>
            <HeaderContainer style={{margin: 10}}>
                <HeaderButton>
                    <Ionicons name="ios-caret-back" size={20} color="#8457AA" onPress={() => navigation.goBack()}/>
                </HeaderButton>
                <HeaderText>Se connecter</HeaderText>
            </HeaderContainer>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <InputText>Email</InputText>
                <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'} activeUnderlineColor={'#EEEEEE'}
                       mode={'flat'} onChangeText={text => setLogin({...login, email: text})} autoCapitalize='none'
                       placeholder="Email"/>
                <HelperText type={'error'} visible={error.status}>{error.message}</HelperText>
                <InputText>Mot de passe</InputText>
                <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'} activeUnderlineColor={'#EEEEEE'}
                       onChangeText={text => setLogin({...login, password: text})} autoCapitalize='none' mode={'flat'}
                       placeholder={'Mot de passe'}/>
                <HelperText type={'error'} visible={error.status}>{error.message}</HelperText>
                <ActionButton mode="contained" onPress={() => auth()}>
                    <ActionButtonText>Se connecter</ActionButtonText>
                </ActionButton>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{
                        color: '#EEEEEE', marginTop: 10, fontWeight: 'bold', marginLeft: 10,
                        marginRight: 10,
                        textAlign: 'center',
                        fontSize: 12
                    }}>
                        Vous n'avez pas de compte s'inscrire
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        color: '#EEEEEE', marginTop: 10, fontWeight: 'bold', marginLeft: 10,
                        marginRight: 10,
                        textAlign: 'center',
                        fontSize: 12
                    }}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
            </View>
        </DefaultView>
    )
}