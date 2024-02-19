import {Chip, Text} from "react-native-paper";

export const FavoriteGame = ({data}) => {
    return (
        <Chip icon="gamepad" style={{
            backgroundColor: '#18111B',
            margin: 5,
            borderWidth: 1,
            borderColor: "#54346B",
            color: "#8457AA"
        }}><Text style={{color: "#EEEEEE"}}>{data.title}</Text></Chip>
    )
}