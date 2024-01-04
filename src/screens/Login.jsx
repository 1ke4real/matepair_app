import {View} from "react-native";
import {Text,} from "react-native-paper";
import {Input, DefaultView, InputText, ActionButton, Title} from "../constants/style/styled";
export  const Login = ({navigation}) => {
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
                    activeUnderlineColor={'#EEEEEE'}/>
                <InputText>Password</InputText>
                <Input
                    underlineColor="transparent"
                    theme={{  colors: { text: '#EEEEEE'} }}
                    textColor={'#EEEEEE'}
                    activeUnderlineColor={'#EEEEEE'}/>
                <Text style={{color: '#EEEEEE', marginTop:10, fontWeight: 'bold'}}>Mot de passe oublié ?</Text>
            </View>
            <ActionButton mode="contained" onPress={()=> navigation.navigate('Home')}>
                Go to Home
            </ActionButton>
        </DefaultView>
    )
}