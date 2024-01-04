import {View} from "react-native";
import {Text,} from "react-native-paper";
import {Input, DefaultView, InputText, ActionButton, Title} from "../constants/style/styled";
import {useState} from "react";
export  const Login = ({navigation}) => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const testLogin = async () => {
        const req = await fetch('https://matepair.mikeleman.fr/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: login
        })
        const res = await req.json()
        console.log(res)
        }

    return (
        <DefaultView style={{
            justifyContent: 'center',
        }}>
            <Title>Se connecter</Title>
            <View style={{marginBottom : 10, paddingLeft: 10, paddingRight: 10}}>
                <Text>Login</Text>
                <InputText>Email</InputText>
                <Input
                    underlineColor="transparent"
                    theme={{  colors: { text: '#EEEEEE'} }}
                    textColor={'#EEEEEE'}
                    activeUnderlineColor={'#EEEEEE'}
                    onChangeText={text => setLogin({...login, email: text})}
                />
                <InputText>Password</InputText>
                <Input
                    underlineColor="transparent"
                    theme={{  colors: { text: '#EEEEEE'} }}
                    textColor={'#EEEEEE'}
                    activeUnderlineColor={'#EEEEEE'}
                    onChangeText={text => setLogin({...login, password: text})}
                />
                <Text style={{color: '#EEEEEE', marginTop:10, fontWeight: 'bold'}}>Mot de passe oublié ?</Text>
            </View>
            <ActionButton mode="contained" onPress={()=> testLogin()}>
                Login
            </ActionButton>
            <ActionButton mode="contained" onPress={()=> navigation.navigate('Home')}>
                Go to Home
            </ActionButton>
        </DefaultView>
    )
}