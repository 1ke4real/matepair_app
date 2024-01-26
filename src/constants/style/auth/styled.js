import styled from "styled-components/native";
import {View} from "react-native";
import {Button, Text} from "react-native-paper";
const HeaderContainer = styled(View)(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    itemAlign: 'center',
    gap: 10,
    marginBottom: 20,
    marginTop: 20,
}));

const HeaderButton = styled(Button)(() => ({
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18111B',
    borderWidth: 1,
    borderColor: '#54346B',
    padding: 10,
    color: '#8457AA',
}));
const HeaderText = styled(Text)(() => ({
    color: '#EEEEEE',
    fontSize: 20,
    fontWeight: 'bold',
}));

export {HeaderContainer, HeaderButton, HeaderText}