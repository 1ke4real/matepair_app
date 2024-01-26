import {View} from "react-native";
import {IconButton, Text,} from "react-native-paper";
import {Input, DefaultView, InputText, ActionButton, Title, ActionButtonText} from "../constants/style/styled";
import {useState} from "react";
import {HeaderButton, HeaderContainer, HeaderText} from "../constants/style/auth/styled";
import { Ionicons } from '@expo/vector-icons';

export  const Register = ({navigation}) => {
const [login, setLogin] = useState({
    email: '',
    password: ''
})
const auth = async () => {
    console.log(login)
}

    return (
        <DefaultView style={{padding: 10}}>
            <HeaderContainer style={{margin:10}}>
                <HeaderButton>
                    <Ionicons name="ios-caret-back"  size={20} color="#8457AA" onPress={()=>navigation.goBack()}/>
                </HeaderButton>
                <HeaderText>Se connecter</HeaderText>
            </HeaderContainer>
            <View style={{marginBottom : 10, paddingLeft: 10, paddingRight: 10, flex : 1, justifyContent:'center'}}>
                <InputText>Username</InputText>
                <Input
                    underlineColor="transparent"
                    theme={{  colors: { text: '#EEEEEE'} }}
                    textColor={'#EEEEEE'}
                    activeUnderlineColor={'#EEEEEE'}
                    onChangeText={text => setLogin({...login, email: text})}
                />
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

                <ActionButton mode="contained" onPress={()=> auth()}>
                    <ActionButtonText>S'inscrire</ActionButtonText>
                </ActionButton>

            </View>

        </DefaultView>
    )
}