import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';

const TimeOfDayChips = ({user, setUser}) => {
    const toggleTimeOfDaySelection = (time) => {
        const isSelected = user.days_time.includes(time);
        let updatedTimes;
        if (isSelected) {
            updatedTimes = user.days_time.filter((selectedTime) => selectedTime !== time);
        } else {
            updatedTimes = [...user.days_time, time];
        }
        setUser({...user, days_time: updatedTimes});
    };

    const renderTimeOfDayChip = (time) => {
        const isSelected = user.days_time.includes(time);
        return (
            <TouchableOpacity onPress={() => toggleTimeOfDaySelection(time)} key={time}>
                <Chip style={{
                    backgroundColor: isSelected ? '#8457AA' : '#18111B',
                    margin: 5,
                    borderWidth: 1,
                    borderColor: isSelected ? '#54346B' : 'transparent',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <MaterialIcons
                            name={time === 'Matin' ? "wb-sunny" : time === 'Après-midi' ? "brightness-5" : "brightness-3"}
                            size={20} color="#EEEEEE"/>
                        <Text style={{color: '#EEEEEE', marginLeft: 5}}>{time}</Text>
                        {isSelected && (
                            <MaterialIcons name="check" size={20} color="#EEEEEE"/>
                        )}
                    </View>
                </Chip>
            </TouchableOpacity>
        );
    };

    return (
        <>
            {renderTimeOfDayChip('Matin')}
            {renderTimeOfDayChip('Après-midi')}
            {renderTimeOfDayChip('Soir')}
        </>
    );
};

export default TimeOfDayChips;
