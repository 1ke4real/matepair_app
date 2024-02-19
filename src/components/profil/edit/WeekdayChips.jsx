import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';

const WeekdayChips = ({user, setUser}) => {
    const toggleDaySelection = (day) => {
        const isSelected = user.week_days.some((weekday) => weekday.id === day.id);
        let updatedWeekdays;
        if (isSelected) {
            updatedWeekdays = user.week_days.filter((weekday) => weekday.id !== day.id);
        } else {
            updatedWeekdays = [...user.week_days, {id: day.id, name: day.name, users: []}];
        }
        setUser({...user, week_days: updatedWeekdays});
    };

    const renderWeekdayChip = (day) => {
        const isSelected = user.week_days.some((weekday) => weekday.id === day.id);
        return (
            <TouchableOpacity onPress={() => toggleDaySelection(day)} key={day.id}>
                <Chip style={{
                    backgroundColor: isSelected ? '#8457AA' : '#18111B',
                    margin: 5,
                    borderWidth: 1,
                    borderColor: isSelected ? '#54346B' : 'transparent',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <MaterialIcons name={'calendar-today'} size={20} color="#EEEEEE"/>
                        <Text style={{color: '#EEEEEE', marginLeft: 5}}>{day.name}</Text>
                        {isSelected && (
                            <MaterialIcons name="check" size={20} color="#EEEEEE" style={{marginLeft: 5}}/>
                        )}
                    </View>

                </Chip>
            </TouchableOpacity>
        );
    };

    return (
        <>
            {renderWeekdayChip({id: 1, name: 'Lundi'})}
            {renderWeekdayChip({id: 2, name: 'Mardi'})}
            {renderWeekdayChip({id: 3, name: 'Mercredi'})}
            {renderWeekdayChip({id: 4, name: 'Jeudi'})}
            {renderWeekdayChip({id: 5, name: 'Vendredi'})}
            {renderWeekdayChip({id: 6, name: 'Samedi'})}
            {renderWeekdayChip({id: 7, name: 'Dimanche'})}
        </>
    );
};

export default WeekdayChips;
