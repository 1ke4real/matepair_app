import {Chip, Text} from "react-native-paper";

export const DayTime = ({data}) => {
    return (
        <Chip icon="clock" style={{
            backgroundColor: '#18111B',
            margin: 5,
            borderWidth: 1,
            borderColor: "#54346B",
            color: "#8457AA"
        }}><Text style={{color: "#EEEEEE"}}>{data.name}</Text></Chip>
    )
}