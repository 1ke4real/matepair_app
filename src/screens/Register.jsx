import {TouchableOpacity, View} from "react-native";
import {HelperText, IconButton, Text,} from "react-native-paper";
import {Input, DefaultView, InputText, ActionButton, Title, ActionButtonText} from "../constants/style/styled";
import {useEffect, useState} from "react";
import {HeaderButton, HeaderContainer, HeaderText} from "../constants/style/auth/styled";
import {Ionicons} from '@expo/vector-icons';

export const Register = ({navigation}) => {
    const [error, setError] = useState({
        message: '',
        status: false
    })
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: ''
    })
    const reg = async () => {
        const req = await fetch('https://mikeleman.fr/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
        })
        const res = await req.json()
        if (req.status === 200) {
            navigation.navigate('Login')
        } else {
            setError({
                message: "Une erreur est survenue",
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
                <HeaderText>S'inscrire</HeaderText>
            </HeaderContainer>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <InputText>Nom d'utilisateur</InputText>
                <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'} activeUnderlineColor={'#EEEEEE'}
                       mode={'flat'} onChangeText={text => setRegister({...register, username: text})}
                       autoCapitalize='none' placeholder="Nom d'utilisateur"/>
                <HelperText type={'error'} visible={error.status}>{error.message}</HelperText>
                <InputText>Email</InputText>
                <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'} activeUnderlineColor={'#EEEEEE'}
                       mode={'flat'} onChangeText={text => setRegister({...register, email: text})}
                       autoCapitalize='none' placeholder="Email"/>
                <HelperText type={'error'} visible={error.status}>{error.message}</HelperText>
                <InputText>Mot de passe</InputText>
                <Input theme={{colors: {text: '#EEEEEE'}}} textColor={'#EEEEEE'} activeUnderlineColor={'#EEEEEE'}
                       onChangeText={text => setRegister({...register, password: text})} autoCapitalize='none'
                       mode={'flat'} placeholder={'Mot de passe'}/>
                <HelperText type={'error'} visible={error.status}>{error.message}</HelperText>

                <ActionButton mode="contained" onPress={() => reg()}>
                    <ActionButtonText>S'inscrire</ActionButtonText>
                </ActionButton>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        color: '#EEEEEE', marginTop: 10, fontWeight: 'bold', marginLeft: 10,
                        marginRight: 10,
                        textAlign: 'center',
                        fontSize: 12
                    }}>
                        Vous avez déjà un compte ? Se connecter
                    </Text>
                </TouchableOpacity>

            </View>

        </DefaultView>
    )
}