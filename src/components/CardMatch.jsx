import {Image, ScrollView, View} from "react-native";

export const CardMatch = () => {
    return (
        <ScrollView style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 10,
            marginBottom: 10,
            marginRight: 10,
            marginLeft: 10,
            overflow: "hidden"
        }} horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: "row", gap: 10}}>
                <Image source={{uri: 'https://placekitten.com/300/200'}}
                       style={{height: 200, width: 150, borderRadius: 5}}/>
                <Image source={{uri: 'https://placekitten.com/300/200'}}
                       style={{height: 200, width: 150, borderRadius: 5}}/>
                <Image source={{uri: 'https://placekitten.com/300/200'}}
                       style={{height: 200, width: 150, borderRadius: 5}}/>
                <Image source={{uri: 'https://placekitten.com/300/200'}}
                       style={{height: 200, width: 150, borderRadius: 5}}/>
            </View>
        </ScrollView>
    )
}